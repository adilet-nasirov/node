const mongoose = require('mongoose');
const productShema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    dateOfCreation:{
        type: Date,
        date: Date.now,
        required: true
    }
})

module.exports= mongoose.model('Product', productShema)