const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

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





