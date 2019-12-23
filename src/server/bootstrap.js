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

module.exports = function(app) {
    app.get('/user', (req, res) => {
        return res.json({
            user_name: 'Natalia Bystrova',
            user_nic: 'natali_bystrova',
            description: 'Fashion designer - ESMOD French fashion University 🎓 Beauty, fashion & lifestyle',
            folowers: 123,
            following: 321,
            posts_count: 322
        });
    });

    app.get('/posts', (req, res) => {
        return res.json(posts);
    });
}