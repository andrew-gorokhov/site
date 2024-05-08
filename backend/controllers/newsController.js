const { NewsList } = require('../models/course');


class NewsController {
  async createNews(req, res) {
    const newNews = await NewsList.create(req.body);
    res.json(newNews);
  }
  async getNews(req, res) {
    const news = await NewsList.findAll();
    res.json(news);
  }
  async getOneNews(req, res) {
    const {id, user_id} = req.body
    const news = await NewsList.findOne(req.body);
    res.json(news)
  }
  async updateNews(req, res) {
    const {id, user_id, title, icon, text} = req.body
    const news = await NewsList.update(req.body);
    res.json({message: 'Данные обновлены'}, news)
  }
  async deleteNews(req, res) {
    const {id, user_id} = req.body
    const deluser = await NewsList.destroy({where:{id, user_id}});
    res.json({message: 'Новость удалена'})
}
}


module.exports = new NewsController();