# election_app/utils.py
from collections import defaultdict
import pandas as pd
import json
def prepare_data_for_template(seats_change):
    labels = list(seats_change.keys())
    gained = [change['Gained'] for change in seats_change.values()]
    print("gained:",gained)
    lost = [change['Lost'] for change in seats_change.values()]
    percentage_difference = [change['Percentage_Difference'] for change in seats_change.values()]

    return {
        'labels': labels,
        'gained': gained,
        'lost': lost,
        'percentage_difference': percentage_difference,
    }
def analyze_election_results(file_path_2014, file_path_2019, coalition):
    # Read the election results data for 2014
    df_2014 = pd.read_csv(file_path_2014)

    # Read the election results data for 2019
    df_2019 = pd.read_csv(file_path_2019)

    # Extract relevant columns
    relevant_columns = ['State name', 'Party Abbreviation', 'Total Votes Polled', 'Position']
    print(relevant_columns)
    # Extract relevant columns for 2014
    df_2014 = df_2014[relevant_columns]
    print(df_2014)

    # Extract relevant columns for 2019
    df_2019 = df_2019[relevant_columns]
    # Filter data for the specified coalition for 2014
    global coalition_votes_2014
    coalition_df_2014 = df_2014[df_2014['Party Abbreviation'].isin(coalition)]
    print(coalition_df_2014)

    # Filter data for the specified coalition for 2019
    coalition_df_2019 = df_2019[df_2019['Party Abbreviation'].isin(coalition)]
    print(coalition_df_2019)

    # Calculate total votes and coalition-wise votes for 2014
    global total_votes_2014
    total_votes_2014 = coalition_df_2014['Total Votes Polled'].sum()
    
    coalition_votes_2014 = coalition_df_2014.groupby('Party Abbreviation')['Total Votes Polled'].sum().to_dict()
    print("coalition Votes:",coalition_votes_2014)
    # Calculate total votes and coalition-wise votes for 2019
    total_votes_2019 = coalition_df_2019['Total Votes Polled'].sum()
    coalition_votes_2019 = coalition_df_2019.groupby('Party Abbreviation')['Total Votes Polled'].sum().to_dict()

    # Calculate seats gained and lost for 2014
    seats_gained_2014 = {}
    seats_lost_2014 = {}

    for party in coalition:
        seats_gained_2014[party] = coalition_df_2014[(coalition_df_2014['Party Abbreviation'] == party) & (coalition_df_2014['Position'] == 1)].shape[0]
        seats_lost_2014[party] = coalition_df_2014[(coalition_df_2014['Party Abbreviation'] == party) & (coalition_df_2014['Position'] != 1)].shape[0]

    # Calculate seats gained and lost for 2019
    seats_gained_2019 = {}
    seats_lost_2019 = {}

    for party in coalition:
        seats_gained_2019[party] = coalition_df_2019[(coalition_df_2019['Party Abbreviation'] == party) & (coalition_df_2019['Position'] == 1)].shape[0]
        seats_lost_2019[party] = coalition_df_2019[(coalition_df_2019['Party Abbreviation'] == party) & (coalition_df_2019['Position'] != 1)].shape[0]
        print(total_votes_2014)

    return total_votes_2014, total_votes_2019, coalition_votes_2014, coalition_votes_2019, seats_gained_2014, seats_lost_2014, seats_gained_2019, seats_lost_2019

def calculate_seats_change(gained_2014, lost_2014, gained_2019, lost_2019):
    seats_change = {}
    t=0

    for party in gained_2014.keys():
        denominator_2014 = gained_2014[party] + lost_2014[party]
        denominator_2019 = gained_2019[party] + lost_2019[party]

        if denominator_2014 != 0:
            percentage_difference = (((gained_2019[party] - gained_2014[party]) / denominator_2014) -
                                     ((lost_2019[party] - lost_2014[party]) / denominator_2014)) * 100
            swing = (((gained_2019[party] - gained_2014[party]) / denominator_2014) -
                     ((lost_2019[party] - lost_2014[party]) / denominator_2014)) * 100
        else:
            percentage_difference = 0
            swing = 0

        if denominator_2019 != 0:
            percentage_of_win_or_lose = (gained_2019[party] / denominator_2019) * 100
        else:
            percentage_of_win_or_lose = 0
        t+=1
        seats_change[party] = {
             't':t,
             'Gained': gained_2019[party] - gained_2014[party],
             'Lost': lost_2019[party] - lost_2014[party],
             'Percentage_Difference': percentage_difference,
             'Swing': swing,
             'Percentage_of_Win_or_Lose': percentage_of_win_or_lose,
             'no_of_won_seats':gained_2019[party],
             'no_of_lost_seats':lost_2019[party],
             'won_per_par_seats':str((gained_2014[party]/(lost_2014[party]+gained_2014[party]))*100)+'%',
             'won_per_total_seats':str((gained_2014[party]/545)*100)+'%'
        }
    for i in coalition_votes_2014.keys():
        seats_change[i]['total_votes']=coalition_votes_2014[i]
        seats_change[i]['vote_bank']=str(((seats_change[i]['total_votes'])/total_votes_2014)*100)+'%'
    print("Seats change coal:",seats_change)

    return seats_change
