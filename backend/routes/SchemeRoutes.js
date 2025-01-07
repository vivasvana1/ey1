const express = require('express');
const { recommendSchemes } = require('../controllers/schemeController');  // Correct import path for controller
const router = express.Router();

// Define the POST route for recommending schemes
router.post('/recommend-schemes', recommendSchemes);

module.exports = router;
