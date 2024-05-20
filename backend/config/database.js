const mongoose = require('mongoose');

const connectDatabase = async ()=>{
    DB_URI = process.env.DB_LOCAL_URI
    try{
        await mongoose.connect(DB_URI).then(con =>{
            console.log(`Database connected successfully and Running Port is : ${con.connection.host}`);
        })
    }catch(error){
        console.log(`Database not connected,Please check again ${error}`);
    }
}

module.exports = connectDatabase;