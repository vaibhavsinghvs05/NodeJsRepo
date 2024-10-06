import mongoose from "mongoose";

async function connectToDb(url){
    try{
        const connection = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database Connected Successfully!!");
        return connection;
    }
    catch(error){
        console.error("Database connection error:", error);
    }
}

export default connectToDb;