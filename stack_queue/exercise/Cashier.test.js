const { Cashier, Customer, Order } = require("./Cashier");

test("Cashier", function () {
  let cashier = new Cashier();

  cashier.addOrder(new Customer("Jim", new Order("Fries", 4)));
  cashier.addOrder(new Customer("Sammie", new Order("Burger", 2)));
  cashier.addOrder(new Customer("Peter", new Order("Drink", 3)));
  const GET_ORDER_1 = cashier.deliverOrder();
  const GET_ORDER_2 = cashier.deliverOrder();
  const GET_ORDER_3 = cashier.deliverOrder();
  expect(GET_ORDER_1).toMatchObject({
    name: "Jim",
    order: {
      dish: "Fries",
      qty: 4,
    },
  });
  expect(GET_ORDER_2).toMatchObject({
    name: "Sammie",
    order: {
      dish: "Burger",
      qty: 2,
    },
  });
  expect(GET_ORDER_3).toMatchObject({
    name: "Peter",
    order: {
      dish: "Drink",
      qty: 3,
    },
  });
});
