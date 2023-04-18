
/* sau này tất cả router của mình đều nạp qua file index của thư mục routes */

const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {

    /* app.get('/news', (req, res) => {
        res.render('news');
    }) */
    app.use('/news', newsRouter) /* thay vì viết như cũ trong 1 file thì ta cấu hình lại để dễ quản lí, trên dưới là 1 */
    
    app.post("/search", function(req, res) {
        /* post method là gửi dữ liệu ngầm và nó sẽ ko xuất hiện trên URL giống như query parameters của get method */
        res.render('news');
        console.log(req.body.gender) /* thằng query parameters đã tích hợp sẵn middleware rồi nên chỉ cần req.query là sẽ lấy đc dữ liệu nhưng mà mấy thằng khác thì chưa nên phải apply body parser vào mới lấy được */

    })

    app.use('/', siteRouter)
    
} 

module.exports = route;
