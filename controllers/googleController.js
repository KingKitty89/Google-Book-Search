const axios = require('axios');

// Defining methods for the booksController
module.exports = {
    findByTitle: function (req, res) {
        const searchTerm= req.body;
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm).then(results => {
            res.json(results.data.items);
        }).catch(err => res.json(err));
    }
};