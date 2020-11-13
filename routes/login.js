import mongoose from "mongoose";
import user from "../models/user.js";
import express from "express";
import Joi from "joi";

const login = express.Router();


login.post('/', (req, res) => {
    try {
        const obj = user.joiSchema.validate(req.body);
        console.log(obj);
        res.send(obj)
    } catch (error) {
        res.send(error)
    }
});
export default login;