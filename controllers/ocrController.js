const Tesseract = require('tesseract.js');
const fs = require('fs');

exports.processImage = async (req, res) => {
    try {
        const { path } = req.file;

        // Use Tesseract.js to recognize text
        const result = await Tesseract.recognize(path, 'eng');

        // Filter out only the recognized text
        const recognizedText = result.data.text;

        // Delete the uploaded file after processing
        fs.unlinkSync(path);

        // Send the recognized text as JSON
        res.json({ text: recognizedText });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the image. :(' });
    }
};