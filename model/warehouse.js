const mongoose = require("mongoose")

const warehouseSchema = new mongoose.Schema({
  warehousenumber: {
    type: Number,
    required: true,
    unique: true
  },
},
  { timestamps: true })
const warehousedb = mongoose.model('warehouse', warehouseSchema)
module.exports = warehousedb