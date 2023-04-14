import exphbs from 'express-handlebars';

const express = require('express');

const app = express();

const morgan = require('morgan');

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', './views');

const port = 3000;

app.get('/', (req, res) => {
    res.render('home');
    // Remove the res.write() statement
    // Call res.send() to end the response
    res.send();
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});