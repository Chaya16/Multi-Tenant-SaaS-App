from flask import Flask, flash, render_template, redirect, url_for, request, send_from_directory
from flask import Flask, request, redirect, url_for
from werkzeug.utils import secure_filename
from flask import send_from_directory
import pdb
import requests

# initate flask app
app = Flask(__name__)

# This is the path to the upload directory
app.config['UPLOAD_FOLDER'] = 'uploads/'

# These are the extension that we are accepting to be uploaded
app.config['ALLOWED_EXTENSIONS'] = set(['zip', 'png', 'jpeg'])

# For a given file, return whether it's an allowed type or not
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']



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

# route for handling the tenants page
@app.route('/tenantroute', methods=['POST', 'GET'])
def tenantroute():
    error = None
    print("in tenant route")
    print(request.form['tenant'])
    print(request.form['file'])
    filename = request.form['file']
    if request.form['tenant'] == 'instance1':
        with open(filename, 'rb') as f:
            r = requests.post('http://localhost:5001/genUML', files={filename: f})
        return redirect('http://localhost:5001/generateUml')
        #return redirect(url_for('tenant1page'))
    if request.form['tenant'] == 'instance2':
        return redirect(url_for('tenant2page'))
    if request.form['tenant'] == 'instance3':
        return redirect(url_for('tenant3page'))
    if request.form['tenant'] == 'instance4':
        return redirect(url_for('tenant4page'))
     
# route for handling the tenants page
@app.route('/tenant1/gen', methods=['GET', 'POST'])
def tenant1page():
    error = None
    print("in /tenant1/gen")
    #extract file path from form;
    #print(request.form['file'])
    return render_template('t1.html', error=error)


# run app service 
if __name__ == "__main__":
	app.run(host="0.0.0.0", port=5000, debug=True)
	
