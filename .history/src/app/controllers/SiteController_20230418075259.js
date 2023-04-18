

class SiteController {

    /* [GET]   /   */
    home(req, res) {
        res.render('home');
    }

    // [GET]   /search
    search(req,res) {
        res.send("NEWS DETAIL!!!")
    }

}

/* đây là function constructor */
module.exports = new SiteController