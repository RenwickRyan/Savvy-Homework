let size = ["small", "medium", "large"];
let crust = ["thin crust", "thick crust"];

let customerName = "Ryan";

const pizzaToppings = ["pepperoni", "sausage", "bacon", "pineapple"];

let pizzaObject = [size[1], crust[1], ...pizzaToppings];

function greetCustomer() {
  for (let Toppings of pizzaToppings) {
    console.log(Toppings);
  }
  return `Welcome to Devil's Pizza Den. Our toppings are ${pizzaToppings}`;
}
function getPizzaOrder() {
  return `One ${pizzaObject} pizza for ${customerName}coming right up!`;
}
function preparePizza() {
  return `Prepare...... ${pizzaObject} pizza for ${customerName}.`;
}
function servePizza() {
  return `Order up! Here is your ${pizzaObject} pizza...Enjoy!`;
}
console.log(greetCustomer());
console.log(getPizzaOrder());
console.log(preparePizza());
console.log(servePizza());

// below is more of me tryign to figure out passing in things to the function

function getPizzaOrder2(name, size, crust, ...pizzaToppings) {
  console.log("customer name: " + name);
  console.log(size);
  console.log(crust);
  console.log(pizzaToppings);
  return name + size + crust + pizzaToppings;
}
getPizzaOrder2(
  "ryan",
  "small",
  "thin crust",
  "pepperoni",
  "sausage",
  "pineapple"
);
