import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import feed from "./routes/feed.js";
import login from "./routes/login.js";
import register from "./routes/register.js";

const app = express();
mongoose.connect('mongodb://localhost/foodlamp', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.json());
app.use(cors());
app.use('/feed', feed);
app.use("/login", login);
app.use("/register", register);


const PORT = 4000;
app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${PORT}`));