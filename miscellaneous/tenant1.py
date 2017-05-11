from flask import Flask, flash, render_template, redirect, url_for, request
from flask import Flask, request, redirect, url_for, Response, json, jsonify
from werkzeug.utils import secure_filename
from flask import send_from_directory
import os, zipfile, subprocess, base64
from shutil import copyfile


# initate flask app
app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])
def welcome():
    error = None   
    return render_template('t1.html', error=error)

@app.route('/genUML', methods=['GET', 'POST'])
def genUML():
    error = None
    dir_name = 'E:\\281PersonalUI\\Multi-Tenant-SaaS-App'
    extract_dir = 'E:\\281PersonalUI\\Multi-Tenant-SaaS-App\\test'
    extension = ".zip"
    print("in genuml")
    print(request.files)
    filename = str(request.files)    
    for item in os.listdir(dir_name): # loop through items in dir
        if item.endswith(".zip"): # check for ".zip" extension
            file_name = os.path.abspath(item) # get full path of files
            zip_ref = zipfile.ZipFile(file_name) # create zipfile object
            zip_ref.extractall(extract_dir) # extract file to dir
            #zip_ref.close() # close file
        #os.remove(file_name) # delete zipped file
        print("extracted")
        #extraxt file and do stuff
    return redirect(url_for('generateuml'))

@app.route('/generateUml', methods=['POST', 'GET'])
def generateuml():
    #os.chdir('E:\281PersonalUI\Multi-Tenant-SaaS-App\')
    args= ["java", "-jar", "umlparser.jar" ,"test","output"]
    popen = subprocess.Popen(args, stdout=subprocess.PIPE)
    popen.wait()
    result = popen.stdout.read()
    print(result)
    #print(output)
    return redirect(url_for('getUml'))

@app.route('/getUml', methods=(['GET']))
def getUml():
    print ("displaying image")
    copyfile('test/output.png', 'static/output.png')
    error = None
    return redirect(url_for("static", filename="output.png"))
    

# run app service 
if __name__ == "__main__":
	app.run(host="0.0.0.0", port=5001, debug=True)
