const express = require('express');
const app = express();

// app.get - Read Data
app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.status(200).send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.status(200).send('<h1>About Us</h1>');
});
// app.post - Insert Data

//app.put - Update Data

// app.delete - Delete Data

// app.all
app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource is Not Found</h1>');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
