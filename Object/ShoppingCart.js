
var Product = require('./Product')

module.exports = class ShoppingCart{


  constructor() {
    this.products = {}
  }

  getTotalPrice(){
    let totalPrice = 0

    for(var product in this.products){
      let productInCart =  this.products[product]
      totalPrice += productInCart.detail.price * productInCart.quantity
    }
    return totalPrice
  }



  addProduct(product,quantity){
    if(product.id in this.products){
      this.products[product.name].quantity += quantity
    }else{
      this.products[product.name] = {
        detail:product,
        quantity:quantity
      }
    }

  }


  removeProduct(name,number){
    let quantity = this.products[productName].quantity
    this.products[productName].quantity = quantity - number
    if(this.products[productName].quantity <= 0){
      delete this.products[productName]
    }



  }
}
