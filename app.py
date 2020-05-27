from flask import Flask, render_template, request,redirect,jsonify,make_response
from flask_sqlalchemy import SQLAlchemy
from send_email import send_email
from sqlalchemy.sql import func
from werkzeug.utils import secure_filename
from pytube import YouTube
import random, copy
import os

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:manvi@1011@localhost/collector'
SQLALCHEMY_TRACK_MODIFICATIONS = False
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db=SQLAlchemy(app)

class Data(db.Model):
    __tablename__="data"
    id=db.Column(db.Integer, primary_key=True)
    fullname_=db.Column(db.String(20))
    email_=db.Column(db.String(120), unique=True)
    password_=db.Column(db.String(120))
    number_=db.Column(db.String(50))
    Age_=db.Column(db.Integer)
    
    

    def __init__(self,fullname_,email_,password_,number_,Age_):
        self.email_=email_
        self.fullname_=fullname_
        self.number_=number_
        self.Age_=Age_
        self.password_=password_

@app.route("/")
def index():
    return render_template("index.html")




@app.route('/signup/')
def signup():
    return render_template("signup.html")




@app.route("/front", methods=['GET','POST'])
def home1():
    if request.method=='POST':
        fullname=request.form["full_name"]
        email=request.form["email_name"]
        password=request.form["pass"]
        Phone=request.form["phone_no"]
        Age=request.form["age"]
    

        # file=request.files["file_name"]
        # file.save(secure_filename("uploaded"+file.filename))
        # with open("uploaded"+file.filename,"a") as f:
        #     f.write("this as added later")

    
        # print(email, height)
        
        if db.session.query(Data).filter(Data.email_ == email).count()== 0:
            data=Data(fullname,email,password,Phone,Age)
            db.session.add(data)
            db.session.commit()
            send_email(fullname,email,password)
            # print(average_height)
            return render_template("index.html")
    return render_template('signup.html', text="Seems like we got something from that email once!")

@app.route("/home", methods=['GET','POST'])
def home():
    if request.method=='POST':
        email_id=request.form["email_id"]
        pass_word=request.form["pswd"]
        
        if db.session.query(Data).filter(Data.email_ == email_id ).count()== 1:
            if db.session.query(Data).filter(Data.password_ == pass_word ).count()== 1:
                return render_template("front.html")
    return render_template('index.html', text="Seems like you don't have an account for this email ! <br>or check your Email id or Password")

@app.route("/success", methods=['GET','POST'])
def success():
    if request.method=='POST':
        url_name=request.form["url_video"]
        path=request.form["path_name"]

        user_input =url_name
        yt=YouTube(user_input)
        try:
            dw=yt.streams.first()
            dw.download(path)
            return render_template("success.html")
        except:
            return render_template("front.html",text1="Video can't be downloaded!Please see if the url or path entered is correct and try again.")

@app.route("/files")
def files():
    return render_template("files.html")

app.config["IMAGE_UPLOADS"]="C:/Users/manvi/Web/static/img/Uploads" 
app.config["ALLOWED_IMAGE_EXTENSIONS"] = ["JPEG", "JPG", "PNG", "PDF", "DOC", "DOCX", "MP4", "MP3"]

def allowed_image(filename):

    # We only want files with a . in the filename
    if not "." in filename:
        return False

    # Split the extension from the filename
    ext = filename.rsplit(".", 1)[1]

    # Check if the extension is in ALLOWED_IMAGE_EXTENSIONS
    if ext.upper() in app.config["ALLOWED_IMAGE_EXTENSIONS"]:
        return True
    else:
        return False

@app.route("/upload-image", methods=["GET", "POST"])
def upload_image():

    if request.method == "POST":

        if request.files:

            image = request.files["image"]

            if image.filename == "":
                print("No filename")
                return redirect(request.url)

            if not allowed_image(image.filename):
                print("That file extension is not allowed")
                return redirect(request.url)    

            else:
                filename = secure_filename(image.filename)

                image.save(os.path.join(app.config["IMAGE_UPLOADS"], filename))

            print("File saved")

            return redirect(request.url)


    return render_template("upload_image.html")

from flask import send_file, send_from_directory, safe_join, abort

app.config["CLIENT_IMAGES"] = "C:/Users/manvi/Web/static/client/img"
app.config["CLIENT_CSV"] = "C:/Users/manvi/Web/static/client/csv"
app.config["CLIENT_PDF"] = "C:/Users/manvi/Web/static/clients/pdf"

@app.route("/get-image/<image_name>")
def get_image(image_name):
    try:
        return send_from_directory(app.config["CLIENT_IMAGES"], filename=image_name, as_attachment=True)
    except FileNotFoundError:
        abort(404)

@app.route("/get-csv/<filename>")
def get_csv(filename):

    #filename = f"{csv_id}.csv"

    try:
        return send_from_directory(app.config["CLIENT_CSV"], filename=filename, as_attachment=True)
    except FileNotFoundError:
        abort(404) 

@app.route("/get-pdf/<filename>")
def get_pdf(filename):

    #filename = f"{pdf_id}.csv"

    try:
        return send_from_directory(app.config["CLIENT_PDF"], filename=filename, as_attachment=True)
    except FileNotFoundError:
        abort(404)               

@app.route("/References")
def References():
    return render_template("References.html")

    

if __name__ == '__main__':
    app.debug=True
    app.run(port=5005)
