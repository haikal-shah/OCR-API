This project was made for fun, part of my javascript framework studies.

### Prerequisite

**Node.js**
https://nodejs.org/

#### Install Dependencies

Install the required npm packages:
```sh
npm install express multer tesseract.js
```

#### Running the Server

Start the server:
```sh
node server.js
```

The server will start on `http://localhost:3000`.

#### API Endpoints

**POST /ocr**

- **Endpoint**: `http://localhost:3000/ocr`
- **Form Data**:
  - `image` (file): The image file to be processed.

##### Example Using curl

```sh
curl -X POST http://localhost:3000/ocr -F "image=@/path/to/your/image.png"
```

##### Example Response

```json
{
  "text": "Recognized text from the image."
}
```

### Project Structure

```
ocr-api/
├── controllers/
│   └── ocrController.js
├── uploads/
└── server.js
```

- `controllers/ocrController.js`: Contains the logic for processing images and performing OCR.
- `uploads/`: Directory where uploaded images are temporarily stored.
- `server.js`: Entry point of the application, sets up the Express server and routes.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Tesseract.js](https://github.com/naptha/tesseract.js)
- [Multer](https://www.npmjs.com/package/multer)