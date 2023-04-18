const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public'))) /* http://localhost:3000/img/download.png */

app.use(express.urlencoded({ extended:true}))

app.use(express.json()) /* thêm cái này để về sau nếu có đưa thông tin lên server bằng code chứ không phải bằng submit */

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
console.log(req.query); /* thì cái query này trả về là 1 object nên muốn truy cập vào object để lấy value thì . thêm 1 cái nữa vào key */
/* thằng query parameters này thường sử dụng với get method nhất */
console.log(req.query.q);
})

app.post("/search", function(req, res) {
    /* post method là gửi dữ liệu ngầm và nó sẽ ko xuất hiện trên URL giống như query parameters của get method */
    res.render('news');
    console.log(req.body.gender) /* thằng query parameters đã tích hợp sẵn middleware rồi nên chỉ cần req.query là sẽ lấy đc dữ liệu nhưng mà mấy thằng khác thì chưa nên phải apply body parser vào mới lấy được */

})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})