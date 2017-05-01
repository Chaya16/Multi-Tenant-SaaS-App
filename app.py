from flask import Flask, render_template, redirect, url_for, request

# initate flask app
app = Flask(__name__)

# route for handling the login page logic
@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'admin' or request.form['password'] != 'admin':
            error = 'Invalid Credentials. Please try again.'
        else:
            return render_template('tenantspage.html')
    return render_template('loginpage.html', error=error)

# route for handling the tenants page
@app.route('/tenantspage', methods=['GET', 'POST'])
def tenantspage():
    error = None
    return render_template('tenantspage.html', error=error)

# run app service 
if __name__ == "__main__":
	app.run(host="0.0.0.0", port=5000, debug=True)
