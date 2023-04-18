
/* file này xử lí chung cho những thằng không nằm trong tài nguyên cụ thể, ví dụ như là trang home, search, contact */

const express = require('express');
const router = express.Router(); /* cái này là của docs thằng express router 4.x */

/* cái callback function viết bên file NewsController nên ở đây cần phải import nó ra  */
const siteController = require('../app/controllers/SiteController')

/* truy xuất callback function ở bên file SiteController */
router.use('/search', siteController.search) /* newsController . cái gì là chọt vào phương thức đó bên file NewsController */
router.use('/', siteController.home) /* tuyến đường gốc, mỗi / thôi thì phải đưa nó xuống dưới cùng */

module.exports = router