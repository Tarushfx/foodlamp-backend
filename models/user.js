import mongoose from 'mongoose';
import Joi from 'Joi';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    likes: {
        type: Array
    },
    diet: {
        type: Array
    }
});
const dietObject = Joi.object().keys({
    earlyMorning: Joi.string(),
    midMorning: Joi.string(),
    breakfast: Joi.string(),
    lunch: Joi.string(),
    evening: Joi.string(),
    dinner: Joi.string(),
    postDinner: Joi.string()
});
const joiSchema = Joi.object({
    name: Joi.string().min(5).max(50),
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).max(255).required(),
    likes: Joi.array(),
    diet: Joi.array().items(dietObject)
});

export default {
    userSchema, joiSchema
};