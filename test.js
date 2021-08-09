const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/twitter';
require('./models/posts');
mongoose.connect(dbURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        dbName: 'twitter'
    }, (err) => {
        const Post = mongoose.model('Post');
        Post.find()
            .exec((err, postdata) => {
                console.log(postdata);
            });
    });