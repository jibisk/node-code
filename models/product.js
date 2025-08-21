const fs = require('fs');
const path = require('path');

// Define the path to the products.json file
  const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );

// Helper function to read products from file
const getProductsFromFile = (cb)=>{
  
    fs.readFile(p, (err, fileContent) => {
      if (err) {
          return cb([]);
      }
      cb(JSON.parse(fileContent.toString() || "[]"));
    });
}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
