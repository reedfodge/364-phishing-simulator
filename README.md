# 364-phishing-simulator

## Setup:

### **Clone the repository:**
```
git clone https://github.com/reedfodge/364-phishing-simulator && cd 364-phishing-simulator
```

### **Install the necessary Python3 packages:**
```
pip3 install -r requirements.txt
```

### **Launch the Simulation:**
```
python3 sim.py
```
## Instructions for Use

### Audit Mode
```
Enter "audit" at the option selection
```
Audit mode will allow you to view the different components of the simulation individually. The first option allows you to view a sample email that would be sent out to victims while also allowing the user to enter the name that is used in the email manually.	The second option allows you to view the spoofed login pages that would submit their compromised login information to a database. The third option allows you to view the spoofed password reset site, which will have the user submit another unique password. The fourth option allows the user to view randomly generated sample data that could be used by an attacker.

Upon selecting options 1-3, you will also be prompted to choose a company you would like to view the HTML document from, either Venmo or Ticketmaster. Additionally, for option 1, you will also be prompted to enter the name of the account holder you wish to be displayed in the sample phishing email.

### Automatic Simulation Mode
```
Enter "auto" at the option selection
```
The automatic simulation mode will show the process of launching multiple phishing attacks against all of the sample users in the database. During this process, it will first open the email showing the user's name, then open the login page, followed by the password reset page. Between each page opening is a 5 second delay, and the process can be quit at any time by terminating the Python process (CTRL + C in terminal window)
