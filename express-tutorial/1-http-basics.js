const http = require('http');

// call back with two parameters for request and response
const server = http.createServer((req, res) => {
  // console.log(req.url);
  const url = req.url;

  if (url === '/') {
    // headers with status code of 200 signifies successful response, secondly the MIME type
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Home Page</h1>');
    res.end();
    // about page
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Welcome to the About Page</h1>');
    res.end();
    // 404
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Sorry something went wrong, Page Not Found</h1>');
    res.end();
  }
});

server.listen(5000);
