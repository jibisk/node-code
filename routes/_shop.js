const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

// const adminData = require('./admin');

const productsController = require('../controllers/products');


const router = express.Router();

// router.get('/', (req, res, next)=>{
  // console.log(adminData.products)
  // res.send('<h1>sasasa</h1>')
  // res.sendFile(path.join( __dirname, '../', 'views', 'shop.html' ))
  // res.sendFile(path.join( rootDir, 'views', 'shop.html' ))

  // const products = adminData.products;
  // res.render('shop', {prods:products, docTitle:'Shop Page', path:'/'});

  // res.render('shop', {
  //   prods: products,
  //   pageTitle: 'Shop',
  //   path: '/',
  //   hasProducts: products.length > 0,
  //   activeShop: true,
  //   productCSS: true
  // });

//   res.render('shop', {prods:products, pageTitle:'Shop Page', path:'/'});
    
// });

 router.get('/', productsController.getProducts);

module.exports = router;