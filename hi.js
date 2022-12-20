const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>title</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap" rel="stylesheet">
  <style>
      p{
           
          
              
          }
          h3{
              background-color: yellowgreen;
           font-family: cursive;
           
           color: brown;
          }
          </style>
  <link rel="stylesheet" href="5th.css">
  </head>
  
  <body>
      <h3>CSS trial</h3>
      <p id="firpara">trying different color with css</p>
      <p id="thirdpara">trying different color with css</p>
      <p id="secpara">trying different color with css</p>
      <h3>CSS trial</h3>
      <span id="fourpara"> &ensp;&ensp;trying different color with css&ensp;&ensp; </span> 
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});