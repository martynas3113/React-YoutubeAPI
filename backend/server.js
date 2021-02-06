const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established succesfully");
})

const searchRouter = require("./routes/search");
const videoRouter = require("./routes/videos")

app.use("/search", searchRouter);
app.use("/videos", videoRouter);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});