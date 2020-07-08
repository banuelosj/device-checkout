const mongoose = require('mongoose')
const validator = require('validator')

const deviceSchema = new mongoose.Schema({
    assetNumber: {
        type: String,
        required: true
    },
    serialNumber: {
        type: String,
        required: true,
        trim: true,
    },
    deviceType: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    operatingSystem:{
        type: String, 
        trim: true,
    },
    memory: {
        type: Number,
        default: null,
    },
    hasBluetooth: {
        type: Boolean,
        default: false,
    },
    hasCamera: {
        type: Boolean,
        default: false,
    },
    hasInternet: {
        type: Boolean,
        default: false,
    },
    hasGps: {
        type: Boolean,
        default: false,
    },
    unitNumber: {
        type: String,
        default: 'xxx-xxx-xxxx',
    },
    location: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
    },
    availability: {
        type: Boolean,
        default: true,
    },
    history:[{
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
    }],
}, {
    timestamps: true
})

deviceSchema.methods.addCurrentDeviceOwner = async function (owner) {
    const device = this

    device.history = device.history.concat({ owner })
    await device.save()
    
    return device
}

const Device = mongoose.model('Device', deviceSchema)

module.exports = Device