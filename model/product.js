const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    warehousenumber: {
        type: Number,
        required: true

    },
    qty: {
        type: Number,
        required: true
    },
    stock: {
        type: Number
    },
    unstock: {
        type: Number,
        default: "0"
    }

},
    { timestamps: true })
const productdb = mongoose.model('product', productSchema)
module.exports = productdb