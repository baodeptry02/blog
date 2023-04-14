import express from 'express';
import { engine } from 'express-handlebars';

const express = require('express')

const app = express();

const morgan = require('morgan');

app.use(morgan('combined'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const port = 3000

app.get('/', (req, res) => {
    res.render('home');
    res.write("<h1>Hello world!</h1>");
    res.send();
})

app.listen(port, (req, res) => {
    console.log(`listening on ${port}`)
})