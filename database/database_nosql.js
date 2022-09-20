const mongoose = require("mongoose");
async function connect() {
  try {
    const r = await mongoose.connect('mongodb://localhost:27017/testLog');
    console.log('MONGO CONNECTED');
  } catch (e) {
    console.log('MONGO ERROR');
  }
}
module.exports.DB_NOSQL = {connect};
