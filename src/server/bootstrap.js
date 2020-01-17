const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const random = require('lodash/random');

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
});

const posts = [...Array(6)].map((val, i) => ({
    src: `/img/${i+1}.jpg`,
    description: lorem.generateSentences(random(2, 7)),
    likes: random(20, 100)
}));

module.exports = function(app, db) {
    app.get('/user', (req, res) => {
        // ищем пользователя с ником "natali_bystrova"
        db.collection('users').find({
            user_nic: 'natali_bystrova'
        }).toArray((err, data) => {
            const [ currentUser ] = data;
            return res.json(currentUser);
        });
    });

    app.get('/posts', (req, res) => {
        return res.json(posts);
    });
}