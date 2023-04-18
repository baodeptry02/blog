
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;
const route = require('./routes') /* file index js khi gõ thư mục là nó sẽ tự nhập file index nên không cần /index */

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

/* đi cấu hình lại bên file khác để nó cho gọn hơn */
route(app)


app.listen(port, () => {
    console.log(`listening on ${port}`)
})