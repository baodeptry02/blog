

class NewsController {

    /* index này là tên đặt và thực chất nó là function */
    /* [GET] / news, khi gõ cái path ở cuối có /news thì nó sẽ vào đây */
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/:slug có nghĩa là thằng news này chỉ là trang chung thôi, còn muốn chi tiết hơi phần phía sau thì thêm / nữa
    show() {
        res.send("NEWS DETAIL!!!")
    }

}

/* đây là function constructor */
module.exports = new NewsController