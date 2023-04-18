const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))) /* http://localhost:3000/img/download.png */

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({extname: '.hbs'})); //đổi tên đuôi file .handlebars thành .hbs thì những cái nào có chữ handlebars phải đổi thahfnh .hbs hết và thêm cái extname
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.get('/search', (req, res) => {
res.render('search');
console.log(req.query); /* thì cái query này trả về là 1 object nên muốn truy cập vào object thì . thêm 1 cái nữa vào key */
console.log(req.query.q);
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})