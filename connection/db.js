const mongoose = require("mongoose")
const url = "mongodb+srv://ajay:ajay123@cluster0product.vxom0.mongodb.net/product?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const con = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb Connected:${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;