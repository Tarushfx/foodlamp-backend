import mongoose from "mongoose";
import user from "../models/user.js";
import express from "express";
import bcrypt from "bcrypt";

const login = express.Router();
const User = mongoose.model("users", user.userSchema);

login.post("/", async (req, res) => {
  try {
    const { error, value: userObject } = user.joiSchema.validate(req.body);
    //Invalid form of data
    if (error) return res.status(400).send(error.details[0].message);

    let foundUser = await User.findOne({ email: userObject.email });
    if (!foundUser) return res.status(400).send("Invalid email or password.");

    const validPassword = await bcrypt.compare(
      userObject.password,
      foundUser.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid email or password.");

    const token = foundUser.generateAuthToken();
    res.send(token);
  } catch (error) {
    res.status(400).send(error);
  }
});
export default login;
