const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/database');

dotenv.config({path:path.join(__dirname,'config/.env')})


PORT = process.env.PORT;
NODE_ENV = process.env.NODE_ENV;

// server connection:
app.listen(PORT,()=>{
    try{
        console.log(`Server listening Port is : ${PORT} in ${NODE_ENV}`);
    }catch(err){
        console.log(`Server having some listening issue ${err}`);

    }
})

// Database connection:
connectDatabase();