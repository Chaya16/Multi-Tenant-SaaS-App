import json
from flask import Flask, render_template, request, session, flash, redirect, jsonify, json, Response
import zipfile
from flask_cors import CORS
from werkzeug import secure_filename
import os
import subprocess
from subprocess import *
import base64
from flask import send_file


application = Flask(__name__)
application.config['UPLOAD_FOLDER'] = 'uploads/'
application.config['UNZIP_FOLDER'] = 'parser/'

CORS(application)


@application.route("/tenant2", methods=['POST'])
def upload():
    #Code to upload file
    file = request.files['file']
    filename = secure_filename(file.filename)
    print(filename)
    file.save(os.path.join(application.config['UPLOAD_FOLDER'], filename))

    #code to unzip file
    print("Unzipping folder")
    zip_ref = zipfile.ZipFile(application.config['UPLOAD_FOLDER']+filename, 'r')
    zip_ref.extractall(application.config['UNZIP_FOLDER']+os.path.splitext(filename)[0])
    zip_ref.close()

    generateUML(application.config['UNZIP_FOLDER']+os.path.splitext(filename)[0])
    return getImage()

def generateUML(inputfilepath):
    print("generateUML")
    #extract file and do stuff
    
    args= ["java", "-jar", "umlparser.jar" ,inputfilepath,"output"]
    application.config['OUTPUT_FOLDER'] = inputfilepath
    popen = subprocess.Popen(args, stdout=subprocess.PIPE)
    popen.wait()
    result = popen.stdout.read()
    print(result)
    

def clean_dir():
    print("Cleaning Uploaded Directory")
    import os, shutil
    for the_file in os.listdir(application.config['UNZIP_FOLDER']):
        file_path = os.path.join(application.config['UNZIP_FOLDER'], the_file)
        try:
            if os.path.isfile(file_path):
                os.unlink(file_path)
        except Exception as e:
            print(e)

def getImage():
    print("return image")
    with open(application.config['OUTPUT_FOLDER'] + "/output.png", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('UTF-8')
        resp = jsonify({"result": encoded_string})
        resp.headers['Access-Control-Allow-Origin'] = '*'
        clean_dir()
        return resp

if __name__ == "__main__":
    print("running on 0.0.0.0")
    application.run(host='0.0.0.0')
        
