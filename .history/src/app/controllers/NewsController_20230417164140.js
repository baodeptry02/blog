

class NewsController {

    /* index này là tên đặt và thực chất nó là function */
    /* [GET] / news, khi gõ cái path ở cuối có /news thì nó sẽ vào đây */
    index(req, res) {
        res.render('news')
    }

}

/* đây là function constructor */
module.exports = new NewsController