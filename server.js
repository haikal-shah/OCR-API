const express = require('express');
const multer = require('multer');
const { processImage } = require('./controllers/ocrController');

const app = express();
const port = process.env.PORT || 3000;

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// OCR route
app.post('/ocr', upload.single('image'), processImage);

// Handle GET request to root URL
app.get('/', (req, res) => {
    res.send('Welcome. :)');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});