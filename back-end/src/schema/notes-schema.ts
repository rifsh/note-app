import mongoose from "mongoose";


const schema = new mongoose.Schema({
    title:String,
    desciption:String,
    color:String
})

export const notesModel = mongoose.model('note', schema);