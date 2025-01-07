const { PythonShell } = require('python-shell');

// Function to handle recommending schemes
const recommendSchemes = (req, res) => {
  const { user_id } = req.body;  // Get user_id from the body of the request

  // Run the Python script and pass the user_id as an argument
  PythonShell.run('ai-healthcare\\backend\\ml-recommendations\\recommendations.py', {
    mode: 'text',
    args: [user_id]  // Pass user ID as an argument to the script
  }, (err, result) => {
    if (err) {
      console.error('Error in recommendation script:', err);
      return res.status(500).json({ message: 'Error in recommendation' });
    }

    // Return the result to the frontend as a JSON response
    res.json({ recommendedSchemes: result });
  });
};

module.exports = { recommendSchemes };
