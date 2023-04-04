from PIL import Image
from flask import Flask, request, jsonify
from keras.models import load_model
import tensorflow as tf
import io
from flask import Flask
from flask_cors import CORS
import numpy as np

app = Flask(__name__)

CORS(app)

# Load the saved Keras model
model = load_model('ScalpCare-Final.H5')
# model = tf.keras.models.load_model('ScalpCare-Final.H5')

diseases = ["Alopecia Areata", "Contact Dermatitis", "Folliculitis", "Head Lice", "Lichen Planus",
            "Male Pattern Baldness", "Psoriasis", "Seborrheic Dermatitis", "Telogen Effluvium", "Tinea Capitis"]


@app.route('/predict', methods=['POST'])
def predict():
    print("User has sent a form request!")
    print(request.files)
    print(request.files["image"])
    if 'image' not in request.files:
        return 'No file found'

    # Load the image file and preprocess it
    image_data = request.files['image']

    image = Image.open(image_data)
    image = image.resize((224, 224))
    image = tf.keras.preprocessing.image.img_to_array(image)
    image = np.expand_dims(image, axis=0)
    # image = image.convert('RGB')

    # Make a prediction using the model
    # prediction = model.predict(image)
    prediction = model.predict(image)
    print(prediction)
    prediction = np.argmax(prediction)
    print(prediction)
    # Convert the prediction to a string (or any other format you want to return)
    prediction = str(diseases[prediction])
    print(prediction)

    # Return the prediction as JSON
    return jsonify(prediction)


@app.route('/sendres', methods=['GET'])
def sendres():
    return jsonify({"message": "Hello"})


if __name__ == '__main__':
    app.run(host="0.0.0.0")
