const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

/* app.use(express.static(path.join(__dirname, 'public'))) */

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', hbs.engine({extname: '.hbs'})); //đổi tên đuôi file .handlebars thành .hbs thì những cái nào có chữ handlebars phải đổi thahfnh .hbs hết và thêm cái extname
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})