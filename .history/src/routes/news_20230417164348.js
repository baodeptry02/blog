
/* cái nào xử lí riêng về news thì ta đưa vào đây, xử lí riêng trong thư mục routes */

const express = require('express');
const router = express.Router();
/* cái callback function viết bên file NewsController nên ở đây cần phải import nó ra  */
const newsController = require('../app/controllers/NewsController')

module.exports = router