import urlModel from "../models/urlModel.js";
import { nanoid } from "nanoid";

async function urlPost(req, res){
    const shortId = nanoid(8);
    const originalUrl = req.body.originalUrl;
    const customUrl = `http://myCustomUrl/${shortId}`;
    if(!originalUrl){
        res.status(400).json({ error: "URL is Required!"});
    }
    await urlModel.create({
        shortId: shortId,
        originalUrl: originalUrl,
        visitHistory: [],
        customUrl: customUrl
    });
    console.log("This is post url!")
    res.status(201).json({Id: `Data Inserted Successfully! And your New URL is: ${customUrl}`});
}

async function urlGet(req, res){
    try{
        const shortId = req.params.shortId;
        const redirectUrl = await urlModel.findOneAndUpdate({
            shortId: shortId,
            $push: { visitHistory: { timestamps: new Date }}
        });
        console.log(`Your redirect url will be: ${redirectUrl.originalUrl}`);
        return res.redirect(redirectUrl.originalUrl);
    } catch(error){
        console.log(error);
    }
}

async function urlGetClicks(){
    const shortId = req.params.shortId;
    const urlClicks = await urlModel.findOne({
        shortId: shortId
    });
    return res.json({totalClicks: urlClicks.visitHistory.length, analytics: urlClicks.visitHistory})
}

export { urlPost, urlGet, urlGetClicks };