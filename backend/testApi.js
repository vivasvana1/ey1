const axios = require('axios');

// The URL for the backend API endpoint
const url = 'http://localhost:3000/api/schemes/recommend-schemes';

// Sample data to send with the POST request (you can replace with dynamic user_id)
const postData = {
  user_id: 1  // Example user ID, replace with actual if needed
};

// Send the POST request to the backend API
axios.post(url, postData)
  .then(response => {
    // If the request is successful, log the response data (recommended schemes)
    console.log('Recommended Schemes:', response.data);
  })
  .catch(error => {
    // If there's an error, log the error message
    console.error('Error fetching recommendations:', error);
  });
