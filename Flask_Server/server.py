from flask import Flask, request, jsonify
from flask_cors import CORS 
import pickle as pkl
import numpy as np

app = Flask(__name__)
CORS(app)  

@app.route("/results", methods=['POST'])
def results():
    try:
        # Request Data
        data = request.json
        sentence = data['sentence']

        # Load Model
        with open('ec_vsfc.pkl', 'rb') as input_ec:
            encoder = pkl.load(input_ec)

        with open('lrc_vsfc.pkl', 'rb') as input_md:
            model = pkl.load(input_md)

        # Predict
        feature_vector = encoder.transform([sentence])
        label = str(model.predict(feature_vector)[0])

        class_list = {'0': 'Negative', '1': 'Neutral', '2': 'Positive'}
        result = class_list[label]

        return jsonify({"results": result})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
