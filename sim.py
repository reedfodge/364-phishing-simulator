import webbrowser
import os
import pandas as pd
import time

user_df = pd.read_json('users.json')

def run_audit():
    print("Available Functions: ")
    print("(1) View Email")
    print("(2) View Login Site")
    print("(3) View Password Reset Site")
    print("(4) View Sample User Data")
    func = input("Choose Your Function: ")

    if str(func) == '1':
        company = input("Choose Company (Venmo, Ticketmaster): ")
        name = input("Enter Account Name: ")
        generate_email(company, name)
        open_file(company + '_email')
    elif str(func) == '2':
        company = input("Choose Company (Venmo, Ticketmaster): ")
        open_file(company + "_sign-in")
    elif str(func) == '3':
        company = input("Choose Company (Venmo, Ticketmaster): ")
        open_file(company + "_password")
    elif str(func) == '4':
        pd.set_option('display.max_rows', None)
        pd.set_option('display.max_columns', None)
        pd.set_option('display.max_colwidth', None)
        pd.set_option('display.width', 100)
        pd.set_option('display.colheader_justify', 'left')
        print(user_df)
    else:
        print("Error: Please check your input and try again")

def generate_email(company, name):
    with open(os.getcwd() + '/html/' + company + '_email.html', 'w') as outfile:
        with open(os.getcwd() + '/html/' + company + '_1.txt') as infile:
            outfile.write(infile.read())
        outfile.write(name)
        with open(os.getcwd() + '/html/' + company + '_2.txt') as infile:
            outfile.write(infile.read())

def auto_sim():
    for row in user_df.itertuples():
        name = row.first_name
        platforms = row.platforms
        if 'venmo' in platforms.lower():
            company = 'venmo'
            generate_email(company, name)
            open_file(company + '_email')
            time.sleep(5)
            open_file(company + '_sign-in')
            time.sleep(5)
        if 'ticketmaster' in platforms.lower():
            company = 'ticketmaster'
            generate_email(company, name)
            open_file(company + '_email')
            time.sleep(5)
            open_file(company + '_sign-in')
            time.sleep(5)


def open_file(company):
    filename = 'file:///' + os.getcwd() + '/html/' + company + '.html'
    webbrowser.open_new_tab(filename)

if __name__ == "__main__":
    while True:
        selection = input("Choose Your Option (Audit, Automated Simulation, Exit): ")
        if selection.lower() == 'audit':
            run_audit()
        elif 'auto' in selection.lower():
            auto_sim()
        elif selection.lower() == 'exit':
            break
        else:
            print("Error: Please check your input and try again")
