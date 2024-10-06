import express from "express";
import urlRoute from "./routes/urlRoute.js"
import connectToDb from "./connection/connection.js";
const app = express();
const PORT = 8001;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", urlRoute);
app.use("/:shortId", urlRoute);
app.use("/analytics/:shortId", urlRoute);
connectToDb("mongodb://localhost:27017/short_url");
app.listen(PORT, ()=>console.log(`APP STARTED AT PORT: ${PORT}`));