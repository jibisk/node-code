const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const router = express.Router();

// const products = [];

// router.get('/add-product', (req, res, next)=>{
//   res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
//   res.sendFile(path.join( __dirname, '..', 'views', 'add-product.html' ))
//   res.sendFile(path.join( rootDir, 'views', 'add-product.html' ))

    // res.render('add-product', {docTitle:'Add A Product', path:'/admin/add-product'});

    // res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });

//     res.render('add-product', {pageTitle:'Add A Product', path:'/admin/add-product'});


// })


// router.post('/add-product', (req, res, next)=>{

//   products.push({title: req.body.title})

//   res.redirect('/');
// })

// module.exports = router;

// exports.routers = router;
// exports.products = products;


// used Controller function
router.get('/add-product', productsController.getAddProduct);

router.post('/add-product',  productsController.postAddProduct);

module.exports = router;
