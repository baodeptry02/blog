const handlebars = require('handlebars')

const express = require('express')

const app = express();

const morgan = require('morgan');

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', handlebars());
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