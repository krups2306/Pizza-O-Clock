const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://kb2306:krupa2306@cluster0.kukji.mongodb.net/pizza-o-clock'

mongoose.connect(mongoURL)



var db = mongoose.connection

db.on('connected', ()=>{
    console.log(`Mongo DB Connection successful`);
})

db.on(`error`, ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports = mongoose