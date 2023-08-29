const http = require('http');
const fs = require('fs');
//1.server created using http
const server = http.createServer(function (req, res) {
  //4.home url
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is Home Page</h1>');
    //8.end server response
    res.end();
  }
  //5.about url
  else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is About Page</h1>');
    //8.end server response
    res.end();
  }
  //6.contact url
  else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>This is Contact Page</h1>');
    //8.end server response
    res.end();
  }
  //7.write file
  else if (req.url == '/file-write') {
    fs.writeFile('demo.txt', 'hello world', function (error) {
      if (error) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('File Write Fail');
        //8.end server response
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('File Write Success');
        //8.end server response
        res.end();
      }
    });
  }
});
//2.server listening on port 3000
server.listen(3000, () => {
  //3.log message to the console when it starts listening on port 3000
  console.log('Server Running...');
});
