const  router = require('express').Router();
let Video = require('../models/video.model');

router.route("/").get((req, res) => {
    Video.find()
    .then(videos => res.json(videos))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const channel = req.body.channel;
    const videoTitle = req.body.videoTitle;

    const newVideo = new Video({
        channel,
        videoTitle
    });

    newVideo.save()
    .then(() => res.json("New Selected video added!"))
    .catch(err => res.status(400).json("Error: " + err))
});

module.exports = router;