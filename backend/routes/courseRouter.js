const Router = require('express');
const router = new Router();
const courseController = require('../controllers/courseController.js');

router.post('/course', courseController.createCourse)
router.get('/course', courseController.getCourses)
router.get('/course/:id', courseController.getOneCourse)
router.put('/course', courseController.updateCourse)
router.delete('/course/:id', courseController.deleteCourse)

module.exports = router

