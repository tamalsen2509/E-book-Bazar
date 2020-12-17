let mongoose = require('mongoose');
require('dotenv').config()



exports.connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connected to Db!')
    } catch (err) {
        throw new Error ('Error at db/connection:', err )
    }
}