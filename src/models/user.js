const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    esri_id:{
        type: String,
        required: true,
        trim: true,
    },
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
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
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Passord can not include password!')
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

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

// Hide some fields from the user schema
userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()
    
    delete userObject.password
    delete userObject.tokens

    return userObject
}

// Generate an authentification token.
userSchema.methods.generateAuthToken = async function () {
    const user = this

    const token = jwt.sign({ _id: user._id.toString() }, 'thisisanappfordevicecheckoutEsriESS')

    user.tokens = user.tokens.concat({ token })
    await user.save()
    
    return token
}

// find user by their credentials.
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if(!user){
        throw new Error('Unable to login!')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Unable to login!')
    }

    return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function(next) {
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User