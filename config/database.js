const mongoose = require("mongoose")

// mongoose.connect('mongodb://127.0.0.1:27017/MyPortfolio').then(()=>{
//     console.log("Connected");
// })



mongoose.connect(process.env.MONGODBLINK)
    .then(() => console.log('Connected!'));
