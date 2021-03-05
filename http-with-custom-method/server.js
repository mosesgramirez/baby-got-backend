const http = require("http");

function willItBlend(cb) {
  // should be true for anything divisible by 3 between 0 and 9
  const itBlends = Math.floor(Math.random() * 10) % 3 === 0;

  if (itBlends) {
    cb(null, "Good news! It Blends!");
  } else {
    cb(new Error("Oh No! It didn't Blend!"));
  }
}

//create a server object:
http
  .createServer((req, res) => {
    /* delete the line below and replace it with a call to willItBlend.
     write the callback function that is passed to willItBlend inline,
     within the parameter list in the function call */   
    willItBlend((err, cb) => {
      console.log(`This is err: ${err}, this is callback: ${cb}`);
      if (err) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><body><h1>Error ${res.statusCode}: ${err.message}</h1></body></html>`);  
        res.end();
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html><body><h1>Success: ${cb}</h1></body></html>`);   
        res.end();
      }
    });
  })
  .listen(8080); //the server object listens on port 8080


// this is a fork of https://codesandbox.io/s/rl9v3156lp