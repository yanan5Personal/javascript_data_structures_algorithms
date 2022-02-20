const Queue = require("../Queue");

function Cashier() {
  this.customers = new Queue();
}
Cashier.prototype.addOrder = function (customer) {
  this.customers.enqueue(customer);
};
Cashier.prototype.deliverOrder = function () {
  return this.customers.dequeue();
};
Cashier.prototype.printOrder = function () {
  const customer = this.deliverOrder();
  console.log(
    `${customer.name} your order for ${customer.order.qty}-${customer.order.dish} is ready`
  );
};
function Customer(name, order) {
  this.name = name;
  this.order = order;
}
function Order(dish, qty) {
  this.dish = dish;
  this.qty = qty;
}

module.exports = {
  Cashier,
  Customer,
  Order,
};
