# django_app/views.py
from django.shortcuts import render,redirect
import json
import csv
from .utils import analyze_election_results,calculate_seats_change,prepare_data_for_template
from django.contrib.auth.decorators import login_required 
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from .forms import SearchForm
@login_required
def analyze_election(request):
    file_path_2014 = 'LS2009Candidate.csv'  # Replace with your actual file path for 2014
    file_path_2019 = 'LS2014Candidate.csv'  # Replace with your actual file path for 2019
    s1 = search_party1()
    s2 = search_party2()
    coalition=[]
    for i in s1:
        if(i in s2 and i!="IND"):
            coalition.append(i)

    total_votes_2014, total_votes_2019, coalition_votes_2014, coalition_votes_2019, seats_gained_2014, seats_lost_2014, seats_gained_2019, seats_lost_2019 = analyze_election_results(file_path_2014, file_path_2019, coalition)
    gained_2014 = {party: seats_gained_2014[party] for party in coalition}
    print("gained_2014 :",gained_2014)
    lost_2014 = {party: seats_lost_2014[party] for party in coalition}
    gained_2019 = {party: seats_gained_2019[party] for party in coalition}
    lost_2019 = {party: seats_lost_2019[party] for party in coalition}

    seats_change = calculate_seats_change(gained_2014, lost_2014, gained_2019, lost_2019)
    print("seats_change:",seats_change)
    for i in seats_change.values():
        print("hello:",i['Gained'])
    chart_data = prepare_data_for_template(seats_change)
    print(chart_data)
    seats_change_labels = json.dumps(list(seats_change.keys()))
    seats_change_gained = json.dumps([change['Gained'] for change in seats_change.values()])
    seats_change_lost = json.dumps([change['Lost'] for change in seats_change.values()])
    json_data = json.dumps(seats_change)
    print("seats_change_gained",seats_change_gained)
    context = {
        'total_votes_2014': total_votes_2014,
        'total_votes_2019': total_votes_2019,
        'seats_change_labels': seats_change_labels,
        'seats_change_gained': seats_change_gained,
        'seats_change_lost': seats_change_lost,
        'json_data': json_data,
        'gained_2014':gained_2014,
        'gained_2019':gained_2019,
        'seats_change':seats_change,
        **chart_data,
    }
    print(context)

    return render(request, 'electionapp/analyze.html', context)

def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('analyze') 
    else:
        form = UserCreationForm()
    return render(request, 'electionapp/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('/election/analyze')  
    else:
        form = AuthenticationForm()
    return render(request, 'registration/login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('login') 

def search_view_1(request):
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            search_query = form.cleaned_data.get('search_query')
            search_query =search_query.title()
            results = search_csv_1(search_query)
            results = [{key.replace(' ', '_'): value for key, value in item.items()} for item in results]
            if(results):
             results[0]['majority']=(int(results[0]['Total_Votes_Polled'])-int(results[1]['Total_Votes_Polled']))
            return render(request, 'electionapp/search_results.html', {'results': results})
    else:
        form = SearchForm()
    return render(request, 'electionapp/search1.html', {'form': form})

def search_csv_1(query):
    results = []
    with open('C:/Users/muni yaswanth/election_analysis_sp/LS2009Candidate.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            if query in row['PC name']:
                results.append(row)
    return results

def search_view_2(request):
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            search_query = form.cleaned_data.get('search_query')
            search_query =search_query.title()
            results = search_csv_2(search_query)
            results = [{key.replace(' ', '_'): value for key, value in item.items()} for item in results]
            if(results):
             results[0]['majority']=(int(results[0]['Total_Votes_Polled'])-int(results[1]['Total_Votes_Polled']))
            return render(request, 'electionapp/search_results.html', {'results': results})
    else:
        form = SearchForm()
    return render(request, 'electionapp/search2.html', {'form': form})

def search_csv_2(query):
    results = []
    with open('C:/Users/muni yaswanth/election_analysis_sp/LS2014Candidate.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            if query in row['PC name']:
                results.append(row)
    return results

def search_view_3(request):
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            search_query = form.cleaned_data.get('search_query')
            search_query =search_query.upper()
            results = search_csv_3(search_query)
            results = [{key.replace('\n', '_'): value for key, value in item.items()} for item in results]
            print("r:",results)
            if(results):
               results[0]['majority']=(int(results[0]['TOTAL_VOTES'])-int(results[1]['TOTAL_VOTES']))
            return render(request, 'electionapp/search_results1.html', {'results': results})
    else:
        form = SearchForm()
    return render(request, 'electionapp/search3.html', {'form': form})

def search_csv_3(query):
    results = []
    with open('C:/Users/muni yaswanth/election_analysis_sp/LS_2.0.csv', 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            if query in row['CONSTITUENCY']:
                results.append(row)
    return results

def search_party1():
    sp=[]
    with open('C:/Users/muni yaswanth/election_analysis_sp/LS2009Candidate.csv', 'r') as file:
        reader=csv.DictReader(file)
        for row in reader:
            if row['Party Abbreviation'] not in sp:
                sp.append(row['Party Abbreviation'])
        sp.sort()
        return sp
    
def search_party2():
    sp=[]
    with open('C:/Users/muni yaswanth/election_analysis_sp/LS2014Candidate.csv', 'r') as file:
        reader=csv.DictReader(file)
        for row in reader:
            if row['Party Abbreviation'] not in sp:
                sp.append(row['Party Abbreviation'])
        sp.sort()
        return sp

