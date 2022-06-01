from flask import Flask, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS




app= Flask(__name__)
CORS(app)
model= pickle.load(open('model.pkl','rb'))

@app.route('/')
def index():
    response = jsonify(message="hello")
    return response

@app.route('/predict',methods=['POST'])
def predict():

    dataset= request.get_json(force=True)
    print (dataset)
    features = [np.array (dataset['key'])]  
    prediction= model.predict(features)
    if prediction==1:
        return jsonify ( "Sorry!! the possibility of getting STROKE is high. Please take care of yourself. ")
    else:
        return jsonify ( "Congratulations!! You are in a good HEALTH.")

if __name__=="__main__":
    app.run(debug=False)