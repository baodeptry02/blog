const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;


// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', engine({
    /* extname : '.hbs' */
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})