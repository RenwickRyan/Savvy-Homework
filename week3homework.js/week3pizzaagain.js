const pizzaToppings = ["pepperoni", "sausage", "bacon", "pineapple"];
const crust = ["thin crust", "thick crust"];
const size = ["small", "medium", "large", "extra large"];

function greetCustomer() {
  for (let Toppings of pizzaToppings) {
  }
  console.log(
    `Welcome to Devil's Pizza Den. Our toppings are ${pizzaToppings}`
  );
}
greetCustomer();

function getPizzaOrder(size, crust, ...pizzaToppings) {
  console.log(`One ${size}${crust}${pizzaToppings} pizza for coming right up!`);
  return size + crust + pizzaToppings;
}
let order1 = getPizzaOrder(
  size[1],
  crust[1],
  pizzaToppings[0],
  pizzaToppings[1],
  pizzaToppings[2]
);

function preparePizza() {
  console.log(`...cooking pizza...`);
  return getPizzaOrder;
}
preparePizza(order1);

function servePizza() {
  console.log(`Order up! Here is your ${order1} pizza...Enjoy!`);
  return getPizzaOrder;
}
servePizza(order1);
