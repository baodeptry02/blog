

class SiteController {

    /* [GET]   /   */
    home(req, res) {
        res.render('home');
    }

    // [GET]   /search
    search(req,res) {
        res.render('search');
        console.log(req.query); /* thì cái query này trả về là 1 object nên muốn truy cập vào object để lấy value thì . thêm 1 cái nữa vào key */
        /* thằng query parameters này thường sử dụng với get method nhất */
        console.log(req.query.q);
    }

}

/* đây là function constructor */
module.exports = new SiteController