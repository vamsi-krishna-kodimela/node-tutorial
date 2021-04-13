const express = require('express');
const path = require('path');


const router = express.Router();
const products = [];

router.use('/add-product',(req, res, next)=>{
    console.log('First middle ware');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));


});

router.post('/product',(req, res, next)=>{
    products.push({title:req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;