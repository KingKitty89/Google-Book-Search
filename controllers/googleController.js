const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        const searchTerm = req.params.searchTerm;
      axios.get("https//:googleapis.com/books/v1/volumes/?=q" + searchTerm).then(results => {
        res.json(results.data.items);
          console.log(results)
      }).catch(err => res.status(422).json(err));
    }
    }
