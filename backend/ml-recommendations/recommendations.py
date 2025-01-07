import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import joblib

# Load scheme data
schemes = pd.read_csv(r"..\data\schemes.csv")
user_data = pd.read_csv(r"..\data\userid.csv")


# Print first few rows to check data
print(schemes.head())
print(user_data.head())

# Optionally, add any model or logic code here


# Preprocess and vectorize scheme descriptions and eligibility criteria
tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(schemes['Description'] + ' ' + schemes['Eligibility Criteria'])

# Compute cosine similarity between schemes
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

# Save the model
joblib.dump(cosine_sim, 'cosine_similarity_model.pkl')
joblib.dump(tfidf, 'tfidf_vectorizer.pkl')
