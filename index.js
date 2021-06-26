import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from 'helmet';
import compression from 'compression';
import feed from "./routes/feed.js";
import login from "./routes/login.js";
import register from "./routes/register.js";
import like from "./routes/like.js";
import me from "./routes/me.js";
import diet from "./routes/diet.js";

const app = express();
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use("/feed", feed);
app.use("/login", login);
app.use("/register", register);
app.use("/diet", diet);
app.use("/like", like);
app.use("/me", me);

const PORT = 4000;
app.listen(process.env.PORT || PORT, () =>
  console.log(`Listening on port ${PORT}`)
);
