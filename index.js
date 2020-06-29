const express = require("express");
const app = express();
const pino = require('express-pino-logger')()
const zoomWebhook = require('./src/routes/zoom')
const stripeWebhook = require('./src/routes/stripe')
const eventbriteWebhook = require('./src/routes/eventbrite')

const port = 5000;

// Logging
app.use(pino)

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});

app.use('/zoom', zoomWebhook)
app.use('/stripe', stripeWebhook)
app.use('/subscribe', subscribeWebhook)
app.use('/eventbrite', eventbriteWebhook)

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
