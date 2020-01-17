const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const MongoClient = require('mongodb').MongoClient;
const config = require('./webpack.config.js');
const bootstrap = require('./src/server/bootstrap');

// создание сервера
const app = express();
// применение конфига вебпака
const compiler = webpack(config);
// создание клиента для монго
const mongoClient = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true });

// подключение миддлвар для вебпака
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 200
  }
}));
app.use(require('webpack-hot-middleware')(compiler));

// подключение к бд
mongoClient.connect(function(err, client){
    if (err) return console.log(err);
    
    // создание коннекта к базе
    const db = client.db('instagram');

    // создание коллекции с пользователями
    db.createCollection('users');

    // поиск пользователя и ником "natali_bystrova"
    db.collection('users').find({
        user_nic: 'natali_bystrova'
    }).toArray((err, data) => {
        // если пользователя нет
        if (!data.length) {
            const user = {
                user_name: 'Natalia Bystrova',
                user_nic: 'natali_bystrova',
                description: 'Fashion designer - ESMOD French fashion University 🎓 Beauty, fashion & lifestyle',
                folowers: 123,
                following: 321,
                posts_count: 322,
                src: 'img/me.jpg'
            };
            // создаем его
            db.collection('users').insertOne(user);
        }
        // добавляем роуты к приложению
        bootstrap(app, db);
    });
});

// Serve the files on port 4001.
app.listen(4001, function () {
  console.log('Example app listening on port 4001!\n');
});
