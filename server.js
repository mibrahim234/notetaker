const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

// connect these to the html files
const htmlFiles = require('./Develop/public');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// connect these two to the html files
app.use('/', htmlFiles);

//   The following HTML routes should be created:
// * `GET /notes` should return the `notes.html` file.
// * `GET *` should return the `index.html` file.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));  
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  
  });


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});