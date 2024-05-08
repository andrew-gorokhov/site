const { User } = require('../models/course');


class UserController {
  async createUser(req, res) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  }
  async getUser(req, res) {
    const users = await User.findAll();
    res.json(users);
  }
  async getOneUser(req, res) {
    const id = req.params.id
    const user = await User.findOne({id});
    res.json(user)
  }
  async updateUser(req, res) {
    const {id, email, password, firstName, lastName, patronymic, birthday, info, country, city, street, house, frame, apartament} = req.body
    const user = await User.update({email, password, firstName, lastName, patronymic, birthday, info, country, city, street, house, frame, apartament}, {where: {id}});
    res.json({message: 'Данные пользователя обновлены'})
  }
  async deleteUser(req, res) {
    const id = req.params.id
    const user = await User.destroy({where: {id}});
    res.json({message: 'Пользователь удален'})
}
}


module.exports = new UserController();