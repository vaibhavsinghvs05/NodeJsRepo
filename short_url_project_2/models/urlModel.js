import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true
    },
    originalUrl:{
        type: String,
        required: true,
        unique: true
    },
    visitHistory: [{
         timestamps: { 
            type: Date
        } 
    }],
    customUrl: {
        type: String,
        unique: true
    }
},{
    timestamps: true
});

const urlModel = mongoose.model("url", urlSchema);

export default urlModel;