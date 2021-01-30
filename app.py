from flask import Flask, jsonify, render_template, redirect
import datetime
from flask_pymongo import PyMongo
from pymongo import MongoClient

# Create an instance of Flask
app = Flask(__name__)


mongo_url = "mongodb://localhost:27017"

# Defines the route to the home route.
@app.route('/')
def home():
    print("responding to the home route: ", datetime.datetime.now())
    return render_template("index.html")

# Defines the route to the map route.
@app.route('/map')
def map():
    print("responding to the map route: ", datetime.datetime.now())
    return render_template("index2.html")

# Will pull the data for use.
@app.route('/dojoapi')
def dojo():
        client = MongoClient(mongo_url)
        
        db = client['dojo_db']
        
        collection = db['dojos']
        
        results = collection.find()
        
        dojo_data_from_db = [{'name': result['Name'], 'phone': result['Phone'], 'zipcode': result['Zipcode'],'street': result['Street'],'city': result['City'],'state': result['State'], 'style': result['Style'],'county': result['County'], 'lat': result['lat'],'lng': result['lng']} for result in results]

        return jsonify(dojo_data_from_db)

# Defines the route to the data route
@app.route('/data')
def data():
    print("responding to the data route: ", datetime.datetime.now())
    return render_template("data.html")

# Defines the route to the about us route.
@app.route('/about')
def about():
    print("responding to the about route: ", datetime.datetime.now())
    return render_template("aboutusFINAL.html")

if __name__ == "__main__":
    app.run(debug=True)

print("finished running app.py")