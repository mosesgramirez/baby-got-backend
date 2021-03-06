const express = require('express');
const campsiteRouter = express.Router()

// Router() allows for chaining these methods. We can delete "app" on each call and the first path param, which is set in .route. Remove ';' as well.
campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); // statusCode and setHeader are passed by the next() menthod to all subsequent relevant router endpoints.
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite "${req.body.name}" with description "${req.body.description}"`);
})
.put((req, res) => {
    res.statusCode = 403; // forbidden
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;