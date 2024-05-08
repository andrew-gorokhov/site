const { Courses } = require('../models/course');


class CourseController {
  async createCourse(req, res) {
    const newCourse = await Courses.create(req.body);
    res.json(newCourse);
  }
  async getCourses(req, res) {
    const courses = await Courses.findAll();
    res.json(courses);
  }
  async getOneCourse(req, res) {
    const id = req.params.id
    const course = await Courses.findOne({id});
    res.json(course)
  }
  async updateCourse(req, res) {
    const {id, name, icon, title} = req.body
    const course = await Courses.update({name, icon, title}, {where: {id}});
    res.json({message: 'Данные курса обновлены'})
  }
  async deleteCourse(req, res) {
    const id = req.params.id
    const course = await Courses.destroy({where: {id}});
    res.json({message: 'Курс удален'})
}
}


module.exports = new CourseController();