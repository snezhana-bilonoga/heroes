import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import errorHandler from "./ErrorHandlerMiddleware.js";
import errorLogger from "./ErrorLoggerMiddleware.js";

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_DB_URL

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static('./images'));
app.use('/api', router);
app.use(errorLogger);
app.use(errorHandler);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

startApp();
