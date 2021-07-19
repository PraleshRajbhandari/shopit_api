const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con=>{
        console.log(`MongoDb database connected with HOST:${con.connection.host}`)
    })
}

module.exports = connectDatabase