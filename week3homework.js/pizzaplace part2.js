let size = ["small", "medium", "large"];
let crust = ["thin crust", " thick crust"];
let customerName = " Ryan";

const pizzaToppings = ["pepperoni", "sausage", "bacon", "pineapple"];

for (let Toppings of pizzaToppings) {
  console.log(Toppings);
}
function greetCustomer() {
  return `Welcome to Devil's Pizza Den. Our toppings are ${pizzaToppings}`;
}
console.log(greetCustomer());

let customerOrder1 = [size[1], crust[1], pizzaToppings[1], pizzaToppings[2]];

function getPizzaOrder() {
  return `One ${customerOrder1} pizza for ${customerName}coming right up!`;
}
console.log(getPizzaOrder());

function preparePizza() {
  return `Prepare...... ${customerOrder1} pizza for ${customerName}.`;
}
console.log(preparePizza());

function servePizza() {
  return `Order up! Here is your ${customerOrder1} pizza...Enjoy!`;
}
console.log(servePizza());
