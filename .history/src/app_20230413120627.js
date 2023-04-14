import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';

const app = express();
const port = 3000;
const path = require('path');

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})