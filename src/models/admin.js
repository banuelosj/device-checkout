const mongoose = require('mongoose')
const validator = require('validator')

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email!')
            }
        },
    },
    tokens: [{
        token:{
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})


const admin = mongoose.model('Admin', adminSchema)

module.exports = admin