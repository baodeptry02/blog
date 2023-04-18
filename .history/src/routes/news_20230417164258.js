
/* cái nào xử lí riêng về news thì ta đưa vào đây, xử lí riêng trong thư mục routes */

const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController')

module.exports = router