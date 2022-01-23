const express = require("express")
const router = express()
const productdb = require("../model/product")
const warehousedb = require("../model/warehouse")
router.get("/", (req, res) => {
    productdb.find().then((data) => {
        warehousedb.find().then((ware) => {
            res.render('addproduct', { data: data, ware: ware })
        })

    })

})
router.get("/allproducts", (req, res) => {
    productdb.find().then((product) => {
        res.render('listproducts', { product: product })
    })
})
router.get('/warehouse', (req, res) => {
    warehousedb.find().then((data) => {
        res.render('warehouse', { data: data })
    })
})
router.post('/ware', (req, res) => {
    const warehouse = new warehousedb({
        warehousenumber: req.body.ware
    })
    warehouse.save(warehouse).then((data) => {
        res.redirect('/warehouse')
    })
})
router.post('/add', (req, res) => {
    if (!req.body) {
        res.json({ message: "Fill the fields" })
    }
    const product = new productdb({
        product: req.body.name,
        warehousenumber: req.body.ware,
        qty: req.body.qty,
        stock: req.body.qty
    })
    product.save(product).then((data) => {
        if (data) {
            res.redirect('/')
        } else {
            console.log("rejected");
        }
    })
})
module.exports = router