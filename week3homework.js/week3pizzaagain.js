const pizzaToppings = ["pepperoni", "sausage", "bacon", "pineapple"];

function greetCustomer() {
  for (let Toppings of pizzaToppings) {
    console.log(Toppings);
  }
  return `Welcome to Devil's Pizza Den. Our toppings are ${pizzaToppings}`;
}
greetCustomer();

function getPizzaOrder(size, crust, ...pizzaToppings) {
  console.log(`One ${size}${crust}${pizzaToppings} pizza for coming right up!`);
  return size + crust + pizzaToppings;
}
getPizzaOrder("small", "thin crust", "pepperoni", "sausage", "pineapple");

function preparePizza(...getPizzaOrder) {
  console.log(`coming up......${getPizzaOrder} pizza.`);
  return getPizzaOrder;
}
preparePizza("small", "thin crust", "pepperoni", "sausage", "pineapple");

function servePizza(...getPizzaOrder) {
  console.log(`Order up! Here is your ${getPizzaOrder} pizza...Enjoy!`);
  return getPizzaOrder;
}
servePizza("small", "thin crust", "pepperoni", "sausage", "pineapple");
