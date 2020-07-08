const mongoose = require('mongoose')

// DebCpRORJoiQwRwP
// mongoose.connect('mongodb+srv://ES23:DebCpRORJoiQwRwP@cluster0.vq0qn.mongodb.net/ess-device-checkout?retryWrites=true&w=majority', {
//     useNewUrlParser: true, 
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// })

mongoose.connect('mongodb://127.0.0.1:27017/ess-device-checkout', {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})