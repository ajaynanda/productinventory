const express = require("express")
const app = express()
const bodyparser = require("body-parser");
const connectDB = require("./connection/db")
const morgan = require("morgan");
const router = require('./routes/router')
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json())
app.use(morgan("tiny"));
app.set('view engine', 'ejs');
app.use('/', router)
connectDB()
app.listen(5000, () => {
    console.log('server listening on port 5000')
})