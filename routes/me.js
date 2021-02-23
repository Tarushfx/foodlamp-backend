import express from "express";
import _ from "lodash";
import mongoose from "mongoose";
import user from "../models/user.js";
const me = express.Router();
const User = mongoose.model("users", user.userSchema);
me.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const { email, theme } = req.body;
    let foundUser = await User.findOne({ email });
    if (foundUser) {
      foundUser.theme = theme;
      await User.create(foundUser);
      res.status(200).send("Theme Changed");
    } else res.status(400);
  } catch (ex) {
    console.log(ex.message);
  }
});
export default me;
