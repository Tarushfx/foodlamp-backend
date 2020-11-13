import mongoose from "mongoose";
import user from "../models/user.js";
import express from "express";
import Joi from "joi";

const register = express.Router();
const User = mongoose.model("users", user.userSchema);

register.post('/', async (req, res) => {
    try {

        const { error, value: userObject } = user.joiSchema.validate(req.body);
        if (error) return res.status(400).send(error);
        //"Invalid Data"

        const usersCount = await User.findOne({ email: userObject.email }).countDocuments();
        if (usersCount !== 0) return res.status(400).send("Email Already registered!!!");

        if (!userObject.name) userObject.name = userObject.email.split("@")[0];

        const savedUser = await User.create(userObject);

        res.status(200).send(savedUser);
        //"Sucessfully registered!!!"

    } catch (error) {
        res.status(400).send(error);
    }
});
export default register;