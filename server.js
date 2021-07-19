const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv')

//Handle the Uncaught Exception:
process.on('uncaughtException',err=>{
        console.log(`Error: ${err.message}`);
        console.log('Shutting down server due to  Uncaught Exception ');
        process.exit(1)
})

//Setting up config file
dotenv.config({path:'config/config.env'});

//Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT,()=>{
        console.log(`SERVER STARTED ON PORT: ${process.env.port} in ${process.env.NODE_ENV} mode`)
})

//Handle Unhandled Promise Rejections;

process.on('unhandledRejection',err=>{
        console.log(`Error:${err.message}`);
        console.log(`Shutting down the server because Unhandled Promise Rejections`);
        server.close(()=>{
                process.exit(1)
        })
})