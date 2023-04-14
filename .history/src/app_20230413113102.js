const handlebars = require('express-handlebars');
const express = require('express')
const morgan = require('morgan');
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
