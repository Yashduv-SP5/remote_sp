from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from testapp.forms import signupform
from django.contrib.auth.forms import UserCreationForm
@login_required
def home_view(req):
    return render(req,"testapp/home.html")
def amazon_view(req):
    return redirect("https://www.amazon.com")
def flipkart_view(req):
    return redirect("https://www.flipkart.com")
def myntra_view(req):
    return redirect("https://www.myntra.com")
def snapdeal_view(req):
    return redirect("https://www.snapdeal.com")
def signup(req):
    form=UserCreationForm()
    if req.method == 'POST':
        form = UserCreationForm(req.POST)
        if form.is_valid():
            form.save()
            return redirect('/home')
    return render(req,"testapp/sign.html",{'form':form})
def logout(req):
     return render(req,"testapp/logout.html")

