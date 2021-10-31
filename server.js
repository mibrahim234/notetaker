const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// connect these to the html files
const htmlFiles = require('./Develop/public');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// connect these two to the html files
app.use('/', htmlFiles);



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});