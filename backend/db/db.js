const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/captain";

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});


mongoose.connection.on('connected', ()=>{
    console.log("Mongoose is connected.")
})

mongoose.connection.on('error', (err)=>{
    console.log(err)
})

mongoose.connection.on('disconnected', ()=>{
    console.log("Mongoose disconnected.")
})