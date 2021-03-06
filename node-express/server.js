const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/campsites', campsiteRouter);

/* Will implement to campsiteRouter for workshop
app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite "${req.params.campsiteId}" to you`);
});

app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403; 
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite ${req.params.campsiteId}\n`)
    res.end(`Will update the campsite "${req.body.name}" with the description "${req.body.description}"`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting the campsite "${req.params.campsiteId}"`);
});
*/

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

