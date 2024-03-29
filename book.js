const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
    {
        ISBN:String,
        title:String,
        authors:[Number],
        language:String,
        pubdate:String,
        numofpage:Number,
        category:[String],
        publication:Number,
    }
);

// create a book model
 const BookModel = mongoose.model(BookSchema);
module.exports=BookModel;


