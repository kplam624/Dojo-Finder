# This file is to help the user set up the mongo database.

# Importing dependencies.
import pandas as pd
import pymongo

# Reads the json file.
file = 'Test_data/final_dojo.json'
final_df = pd.read_json(file, orient = 'table')
dojo_list = final_df.to_dict('records')

# Uploads the dataframe to mongodb
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Declare the database
db = client.dojo_db

# Declare the collection
dojos = db.dojos

# Inserts the rows to the mongodb
dojos.insert_many(dojo_list)