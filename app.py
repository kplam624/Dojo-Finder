from flask import Flask, jsonify, render_template, redirect
import datetime
from flask_pymongo import PyMongo

# Create an instance of Flask
app = Flask(__name__)

# Defines the route to the home route.
@app.route('/')
def home():
    print("responding to the home route: ", datetime.datetime.now())
    return render_template("index.html")

# Defines the route to the map route.
@app.route('/map')
def map():
    print("responding to the home route: ", datetime.datetime.now())
    return render_template("")

# Defines the route to the data route
@app.route('/data')
def data():
    print("responding to the home route: ", datetime.datetime.now())
    return render_template("")

# Defines the route to the about us route.
@app.route('/about_us')
def about():
    print("responding to the home route: ", datetime.datetime.now())
    return render_template("")