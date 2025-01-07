const express = require('express');
const bodyParser = require('body-parser');
const schemeRoutes = require('./routes/SchemeRoutes');  // Corrected relative path

const app = express();

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use('/api/schemes', schemeRoutes);  // Route handling for /api/schemes

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
