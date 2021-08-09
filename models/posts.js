const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: Date,
        'default': Date.now
    },
    content: {
        type: String
    },
    author: {
        type: String
    }
});

mongoose.model('Post', postSchema);