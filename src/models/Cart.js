const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'

    }],
    username: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'User'
    },
    address:{
        street:{
            type: String,
            required: true
        },
        number:{
            type: Number,
            required: true
        },
        city:{
            type: String,
            required:true
        }        
    },
    date:{
        type: Date,
        default: Date.now,
        required:true
    },

    payment:{
        card:{
            number:{
                type: String,
            },
            cvc:{
                type: String,
            }
        }
    }
})

module.exports = mongoose.model('Cart', Schema)