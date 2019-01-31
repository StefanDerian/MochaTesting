
module.exports = class ShoppingCart {
  constructor () {
    this.products = {}
  }

  /**
 * Calculate the products' price in this cart
 *
 * @returns {number}
 */
  getTotalPrice () {
    let totalPrice = 0

    for (var product in this.products) {
      let productInCart = this.products[product]

      totalPrice += productInCart.detail.price * productInCart.quantity
      console.log(totalPrice)
    }
    return totalPrice
  }
  /**
 * Adds 1 type of products with specified quantity
 *
 * @param {object} product The Product Object
 * @param {number} quantity The quantity of the product entered
 */
  addProduct (product, quantity) {
    if (product.id in this.products) {
      this.products[product.id].quantity += quantity
    } else {
      this.products[product.id] = {
        detail: product,
        quantity: quantity
      }
    }
  }
  /**
 * Remove a type of product with specified quantity
 *
 * @param {string} id the id of the product
 * @param {number} quantity the number of the product willing to be removed
 */
  removeProduct (id, quantity) {
    let currentQuantity = this.products[id].quantity
    this.products[id].quantity = currentQuantity - quantity
    if (this.products[id].quantity <= 0) {
      delete this.products[id]
    }
  }
}
