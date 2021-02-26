import express from "express";
import _ from "lodash";
import mongoose from "mongoose";
import user from "../models/user.js";
const diet = express.Router();
const User = mongoose.model("users", user.userSchema);
import pkg from "lodash";
const { isUndefined } = pkg;
diet.post("/", async (req, res) => {
  // console.log(req);
  try {
    const { email, diet } = req.body;
    console.log(diet);
    if (email == null || isUndefined(diet))
      return res.status(400).send("Diet not provided");
    let foundUser = await User.findOne({ email });
    if (foundUser) {
      // if (foundUser.diet.length === 0) foundUser.diet.push(diet);
      // else {
      //   let index = 0;
      //   while (
      //     diet &&
      //     diet.date &&
      //     new Date(diet.date).getTime() >
      //       new Date(foundUser.diet[index]).getTime()
      //   ) {
      //     index++;
      //   }
      //   if (
      //     new Date(diet.date).getTime() !==
      //     new Date(foundUser.diet[index + 1] || 0).getTime()
      //   )
      //     foundUser.diet = foundUser.diet
      //       .slice(0, index)
      //       .concat(diet)
      //       .concat(foundUser.diet.slice(index));
      //   else
      //     foundUser.diet = foundUser.diet
      //       .slice(0, index)
      //       .concat(diet)
      //       .concat(foundUser.diet.slice(index + 1));
      // }
      foundUser.diet.push(diet);
      await User.create(foundUser);
      res.send("Diet Saved");
    } else res.status(400);
  } catch (error) {
    console.log(error.message);
  }
});
export default diet;
