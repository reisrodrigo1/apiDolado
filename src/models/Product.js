const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    productTitle:{
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required:true
    },
    productPrice:{
        type: Number,
        required:true
    },
    productManufacturer: {
        type: String,
        required: true
    },
    productQuantity:{
        type: Number,
        required: true
    },
    productImage:{
        type: String,
        required: true
    },
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

module.exports = mongoose.model('Product', Schema)