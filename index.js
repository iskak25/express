import express from "express";
import mongoose from "mongoose";
import router from "./routes.js";
import fileUpload from "express-fileupload";
import cors from "cors";

const PORT = 8000;
const DB_URL = `mongodb+srv://user:user@cluster0.rkdw5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload({}));
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("Server " + PORT));
  } catch (e) {
    console.log(e);
  }
}
startApp();
