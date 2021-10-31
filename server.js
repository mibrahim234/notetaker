const express = require('express');
const fs = require("fs");
const path = require("path");
// const  uuid  = require("uuidv8");

 // create port--- initialize app 
const PORT = process.env.PORT || 3001;
const app = express();

 // const data = fs.readFileSync("db.json");
 // const notes = JSON.parse(data);

// Set up middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// get routes 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  app.get("/api/notes", function (req, res) {
    res.json(notes);
});
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

//   // post route
//   app.post("/api/notes", function (req, res) {
//         res.json();
// });


// Starts server 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });





