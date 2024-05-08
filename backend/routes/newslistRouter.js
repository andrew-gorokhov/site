const Router = require('express');
const router = new Router();
const newsController = require('../controllers/newsController.js');

router.post('/news', newsController.createNews)
router.get('/news', newsController.getNews)
router.get('/news', newsController.getOneNews)
router.put('/news', newsController.updateNews)
router.delete('/news', newsController.deleteNews)

module.exports = router

