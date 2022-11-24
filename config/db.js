// Using Mongoose to connect to db
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
        return 0;
    } catch (err) {
        console.log('Cannot connect to Database');
        // process.exit(1);
        return 1;
    }
}

module.exports = connectDB;