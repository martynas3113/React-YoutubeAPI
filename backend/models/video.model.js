const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema ({
    channel: { type: String, required: true },
    videoTitle: { type: String, required: true },
},{
    timestamps: true,
});

const Video = mongoose.model("Selected Videos", videoSchema);

module.exports = Video;