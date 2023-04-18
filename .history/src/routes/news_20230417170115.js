
/* cái nào xử lí riêng về news thì ta đưa vào đây, xử lí riêng trong thư mục routes */

const express = require('express');
const router = express.Router(); /* cái này là của docs thằng express router 4.x */

/* cái callback function viết bên file NewsController nên ở đây cần phải import nó ra  */
const newsController = require('../app/controllers/NewsController')

/*newsController.index */ /* truy xuất callback function ở bên file NewsController */

router.use('/', newsController.index)

module.exports = router