import mongoose from "mongoose";

export const MovieLike = new mongoose.Schema({
    id:{type:String,unique:true,required:true},
    backdrop_path:{type:String,required:true},
    title:{type:String,required:true},
    overview:{type:String,required:true},
    vote_count:{type:Number,required:true},
})