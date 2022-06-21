let mongoose = require("mongoose");


const authorSchema = new mongoose.Schema({

    fmane:{
        type: "string",
        required:true
    },
    lname:{
        type:"string",
        required:true
    },
    title:{
        type: String,
        enum:["Mr","Mrs","Miss"],
        required:true
    },
    emailid:{
        type: "string",
        required:true,
        unique: true
    },
    password:{
        type:"string",
        required:true,
        
    }
},{timestamps:true})

module.exports= mongoose.model("Author",authorSchema);