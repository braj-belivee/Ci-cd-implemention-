const Product = require('../models/product');

exports.getProducts = (req, res) => {
  Product.find()
    .then(products => {
      res.render('index', { products });
    })
    .catch(err => console.log(err));
};

exports.addProduct = (req, res) => {
  const { title, price, description } = req.body;

  const product = new Product({
    title,
    price,
    description
  });

  product.save()
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
};
