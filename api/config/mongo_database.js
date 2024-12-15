const mongoose = require("mongoose")

// function to connect with mongoDb
const connectMongo =  async () => {
     try {
         const URI = 'mongodb://admin:password@mongo:27017/journal_db?authSource=admin'
         await mongoose.connect(URI, {
             useNewUrlParser: true,
             useUnifiedTopology: true,
         })
         console.log("sucessful connetion with mongoDB");
     } catch (error) {
        console.error ("a error happened");
        console.error(error);        
     }
}

module.exports = connectMongo