const exphbs  = require('express-handlebars');

const express = require('express')

const app = express();

const morgan = require('morgan');

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', './views');

const port = 3000

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
