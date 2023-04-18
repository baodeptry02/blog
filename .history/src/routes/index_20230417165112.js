
const newsRouter = require('./news')

function route(app) {

    app.get('/', (req, res) => {
        res.render('home');
    })
    
    /* app.get('/news', (req, res) => {
        res.render('news');
    }) */
    
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
    

} 

module.exports = route;
