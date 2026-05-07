import mongoose from "mongoose";


let bookSchema =  mongoose.Schema({
name:String,
price:Number,
title:String,
image:String,
category:String
})

  const Book = mongoose.model("books",bookSchema);

export default Book;