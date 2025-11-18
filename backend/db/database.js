const mongoose = require('mongoose');


const connect = mongoose.connect(
    `mongodb://localhost:27017/todoapp`
)

module.exports = connect.then(() => {
    console.log("Connected to MongoDB");
})