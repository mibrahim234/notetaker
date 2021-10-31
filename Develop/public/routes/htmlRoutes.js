//   The following HTML routes should be created:
// * `GET /notes` should return the `notes.html` file.
// * `GET *` should return the `index.html` file.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));  
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  
  });