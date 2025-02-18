import mongoose from "mongoose";


const connectToMongoDB = async () => {
    try{

        await mongoose.connect("mongodb://localhost:27017/note_app");
        console.log('Connected to MongoDB')
    }
    catch(error){
        console.log("Error in connecting to MongoDB")
    }

    }

export default connectToMongoDB;