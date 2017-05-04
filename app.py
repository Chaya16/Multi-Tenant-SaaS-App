from flask import Flask, flash, render_template, redirect, url_for, request
from flask import Flask, request, redirect, url_for
from werkzeug.utils import secure_filename
from flask import send_from_directory
import pdb


# initate flask app
app = Flask(__name__)

# welcome page
@app.route('/', methods=['GET'])
def welcome():
    error = None
    return render_template('loginpage.html', error=error)
    

# route for handling the login page logic
@app.route('/login', methods=['POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['uname'] != 'admin' or request.form['pwd'] != 'admin':
            error = 'Invalid Username/Password.'
        else:
            return redirect(url_for('tenantspage'))
    return render_template('loginpage.html', error=error)

# route for handling the tenants page
@app.route('/tenantspage', methods=['GET', 'POST'])
def tenantspage():
    error = None
    return render_template('tenantspage.html', error=error)

# run app service 
if __name__ == "__main__":
	app.run(host="0.0.0.0", port=5000, debug=True)
	
