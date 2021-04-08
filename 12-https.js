const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page in localhost:5000');
  }
  if (req.url === '/about') {
    res.end('Welcome to the about page');
  }
  res.end(`
    <h1>There is an Error!</h1>
    <p>The page you are looking for is not found</p>
    <a href='/'>Go Home</a>`);
});

server.listen(5000);
