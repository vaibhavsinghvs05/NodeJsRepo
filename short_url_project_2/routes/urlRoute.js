import express from "express";
import { urlPost, urlGet, urlGetClicks } from "../controllers/urlController.js";

const router = express.Router(); 
router.route('/').post(urlPost);
router.route("/:shortId").get(urlGet);
router.route("/analytics/:shortId", urlGetClicks);
export default router;