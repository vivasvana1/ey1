import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
import os

try:
    print("Checking file paths...")
    if not os.path.exists('data/schemes.csv'):
        raise FileNotFoundError("The file 'data/schemes.csv' does not exist.")

    if not os.path.isdir('model'):
        os.makedirs('model')

    print("Loading dataset...")
    df = pd.read_csv('data/schemes.csv')

    print("Preprocessing data...")
    encoder = OneHotEncoder(sparse_output=False)
    sector_encoded = encoder.fit_transform(df['sector'].values.reshape(-1, 1))

    tfidf = TfidfVectorizer(stop_words='english')
    eligibility_tfidf = tfidf.fit_transform(df['eligibility_criteria'])

    print("Combining features...")
    X = pd.concat([pd.DataFrame(sector_encoded), pd.DataFrame(eligibility_tfidf.toarray())], axis=1)
    y = df['recommended']

    print("Splitting data into train and test sets...")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    print("Training the model...")
    model = RandomForestClassifier()
    model.fit(X_train, y_train)

    print("Saving model and preprocessors...")
    joblib.dump(model, 'model/model.pkl')
    joblib.dump(encoder, 'model/encoder.pkl')
    joblib.dump(tfidf, 'model/tfidf.pkl')

    print("Model training complete and saved.")

except Exception as e:
    print(f"An error occurred: {e}")
