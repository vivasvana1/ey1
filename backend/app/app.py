from flask import Flask, jsonify, request
import pandas as pd
import joblib
from sklearn.preprocessing import OneHotEncoder
from sklearn.feature_extraction.text import TfidfVectorizer
import requests  # Added for making HTTP requests

app = Flask(__name__)

# Load the pre-trained model and vectorizers
model = joblib.load('model/model.pkl')
encoder = joblib.load('model/encoder.pkl')
tfidf = joblib.load('model/tfidf.pkl')

# Function to load schemes from an external API
def load_schemes():
    api_url = 'http://127.0.0.1:5000/api/schemes'
    try:
        response = requests.get(api_url)
        response.raise_for_status()  # Check for HTTP errors
        schemes_data = response.json()  # Assuming the API returns JSON
        return schemes_data
    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Failed to retrieve schemes: {str(e)}"}), 500

# Function to preprocess data for prediction
def preprocess_data(sector, eligibility_criteria):
    # One-hot encode the sector
    sector_encoded = encoder.transform([[sector]])

    # Transform eligibility criteria using TF-IDF
    eligibility_tfidf = tfidf.transform([eligibility_criteria])

    # Combine features (sector + eligibility)
    X = pd.concat([pd.DataFrame(sector_encoded.toarray()), pd.DataFrame(eligibility_tfidf.toarray())], axis=1)

    return X

# Recommendation API Endpoint
@app.route('/api/recommendation', methods=['POST'])
def recommend_schemes():
    try:
        user_input = request.get_json()  # Get user input from POST request
        sector = user_input.get('sector')
        age = user_input.get('age')
        education = user_input.get('education')

        # Preprocess the user input data
        X_input = preprocess_data(sector, education)

        # Get the model's prediction
        prediction = model.predict(X_input)

        # Load all schemes from the external API
        schemes = load_schemes()

        # Find the schemes that match the predicted recommendation (1 for recommended)
        recommended_schemes = [scheme for scheme, rec in zip(schemes, prediction) if rec == 1]

        return jsonify(recommended_schemes)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
