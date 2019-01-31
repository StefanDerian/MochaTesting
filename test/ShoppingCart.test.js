/* eslint-env mocha */
const ShoppingCart = require('../Object/ShoppingCart')
const Product = require('../Object/Product')
var expect = require('chai').expect

describe('ShoppingCart', function () {
  let goodProduct = new Product('1', 'Apple I phone', 700)
  let shoppingCart = new ShoppingCart()
  describe('#calculateTotalPrice()', function () {
    // assummed that the object is detected by its id not name
    let applePrice = 4.95
    let orangePrice = 3.99
    let appleProduct = new Product('1', 'Apple', applePrice)
    let orangeProduct = new Product('2', 'Orange', orangePrice)

    it('should calculate total price of the products in shopping cart list', function () {
      let shoppingCart = new ShoppingCart()
      shoppingCart.addProduct(appleProduct, 2)
      shoppingCart.addProduct(orangeProduct, 1)
      let totalPrice = shoppingCart.getTotalPrice()
      // after all of the manual calculation from example above
      expect(totalPrice).to.equal(13.89)
    })

    it('should calculate total price of the products in shopping cart list after it the product is added and removed', function () {
      let shoppingCart = new ShoppingCart()
      shoppingCart.addProduct(appleProduct, 3)
      // remove by id
      shoppingCart.removeProduct('1', 1)

      let totalPrice = shoppingCart.getTotalPrice()
      // after all of the manual calculation from example above
      expect(totalPrice).to.equal(9.9)
    })
  })

  // as I am having fun with mocha I am doing the experiments
  describe('#addProduct()', function () {
    it('should have an object with id as a key when products added at first', function () {
      shoppingCart.addProduct(goodProduct, 1)
      let shoppingCartProducts = shoppingCart.products
      expect(shoppingCartProducts).to.have.key(goodProduct.id)
    })
    it('should have quantity object and it is equal to one and an integer', function () {
      let shoppingCartProducts = shoppingCart.products
      expect(shoppingCartProducts[goodProduct.id]).to.have.property('quantity', 1)
    })
    it('should have quantity added by quantity as existing new products come', function () {
      let shoppingCartProducts = shoppingCart.products
      let quantityAdded = 5
      let currentQuantity = shoppingCartProducts[goodProduct.id].quantity
      let afterAddedQuantity = quantityAdded + currentQuantity
      shoppingCart.addProduct(goodProduct, quantityAdded)
      expect(shoppingCartProducts[goodProduct.id]).to.have.property('quantity', afterAddedQuantity)
    })
    it('should have detail object in the added product as new product and it is an object', function () {
      shoppingCart.addProduct(goodProduct)
      let shoppingCartProducts = shoppingCart.products
      expect(shoppingCartProducts[goodProduct.id]).to.have.property('detail').that.is.a('object')
    })
  })
})
