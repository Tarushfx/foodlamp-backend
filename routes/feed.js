import express from "express";
import _ from "lodash";
const feed = express.Router();
feed.post("/", (req, res) => {
    res.json(_.concat({ "hello": "hello" },
        req.body)
    );

});
export default feed;