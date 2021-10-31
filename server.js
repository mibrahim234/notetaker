const express = require('express');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes')

 // create port--- initialize app 
const PORT = process.env.PORT || 3001;
const app = express();

// Set up middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// Starts server 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });


//   The following HTML routes should be created:
// * `GET /notes` should return the `notes.html` file.
// * `GET *` should return the `index.html` file.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));  
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  
  });

//   The following API routes should be created:

// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
// uuid 

