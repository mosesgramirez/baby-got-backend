const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// This is considered a middleware function in express. 'next' is an option third param which is a function instead of an object.
app.use((req, res) => {
    // console.log(req.headers); [morgan will now handle this]
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express server</html></body></h1>');
});

app.listen(port, hostname, () => {
    console.log(`Sever running at http://${hostname}:${port}`);
});

