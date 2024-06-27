const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chakrabortyankit72:MC5GPvK9nJcHHL4c@backenddb.ipimu2w.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log("connected to database!");
      })
}

module.exports = connectDB;