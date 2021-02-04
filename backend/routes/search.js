const  router = require('express').Router();
let Search = require('../models/search.model');

router.route("/").get((req, res) => {
    Search.find()
    .then(search => res.json(search))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const search = req.body.search;

    const newSearch = new Search({search});

    newSearch.save()
    .then(() => res.json("New search instance added!"))
    .catch(err => res.status(400).json("Error: " + err))
});

module.exports = router;