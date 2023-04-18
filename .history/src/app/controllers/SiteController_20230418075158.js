

class SiteController {

    /* [GET]   /   */
    index(req, res) {
        res.render('news')
    }

    // [GET]   /search
    show(req,res) {
        res.send("NEWS DETAIL!!!")
    }

}

/* đây là function constructor */
module.exports = new SiteController