import mongoose from "mongoose";

export const MovieLike = new mongoose.Schema({
    movieId:{type:String,unique:true,required:true},
    likes:{type:Number,required:true},
})