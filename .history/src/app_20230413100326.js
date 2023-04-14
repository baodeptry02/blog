"use strict";

import exphbs from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';

const app = express();


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