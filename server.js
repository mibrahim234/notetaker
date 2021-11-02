const express = require('express');
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

 // create port--- initialize app 
const PORT = process.env.PORT || 3001;
const app = express();

 const data = fs.readFileSync("./db/db.json");
 // ^used to read the file and return its content
 let notes = JSON.parse(data);
 // ^return the data as json object

// Set up middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// get routes 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });
  // returns notes html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
// returns indexhtml

  app.get("/api/notes", function (req, res) {
    res.json(notes);
});
 // should return all saved notes as json
  
// post route
 app.post("/api/notes", function (req, res) {
   req.body.id = uuidv4()
   notes.push(req.body)
   fs.writeFileSync("./db/db.json", JSON.stringify(notes))
      res.json(notes);
 });

app.delete("/api/notes/:id", function (req,res) {
 notes = notes.filter(note => note.id != req.params.id )
fs.writeFileSync("./db/db.json", JSON.stringify(notes))
res.json(notes);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Starts server 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });





