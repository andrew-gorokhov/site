const express = require('express');
const sequelize = require('./db'); // Подставьте правильный путь к вашему файлу db.js
const { User, NewsList } = require('./models/course');
const userRouter = require('./routes/userRouter');
const newslistRouter = require('./routes/newslistRouter');
const courseRouter = require('./routes/courseRouter')
const cors = require('cors')
const PORT = process.env.PORT;

// Создаем экземпляр приложения Express
const app = express();
app.use(cors());
// Добавляем middleware для обработки JSON-запросов
app.use(express.json());
app.options('*', cors())

// Подключаемся к базе данных с использованием Sequelize
sequelize.authenticate()
    .then(() => {
        console.log('Соединение с базой данных установлено');
    })
    .catch((error) => {
        console.error('Ошибка при соединении с базой данных:', error);
    });

sequelize.sync({alter: true})
  .then(() => {
    console.log('Таблицы синхронизированы успешно');
  })
  .catch((error) => {
    console.error('Ошибка синхронизации таблиц:', error);
  });
// Подключаем роутеры
app.use('/api', userRouter);
app.use('/api', newslistRouter);
app.use('/api', courseRouter);

// Запускаем сервер на указанном порту
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
