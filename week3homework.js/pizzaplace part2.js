let size = ["small", "medium", "large"];
let crust = ["thin crust", " thick crust"];
let customerName = " Ryan";

const pizzaToppings = ["pepperoni", "sausage", "bacon", "pineapple"];
let customerOrder1 = [size[1], crust[1], pizzaToppings[1], pizzaToppings[2]];

function greetCustomer() {
  for (let Toppings of pizzaToppings) {
    console.log(Toppings);
  }
  return `Welcome to Devil's Pizza Den. Our toppings are ${pizzaToppings}`;
}

function getPizzaOrder() {
  return `One ${customerOrder1} pizza for ${customerName}coming right up!`;
}

function preparePizza() {
  return `Prepare...... ${customerOrder1} pizza for ${customerName}.`;
}

function servePizza() {
  return `Order up! Here is your ${customerOrder1} pizza ......Enjoy!`;
}

console.log(greetCustomer());
console.log(getPizzaOrder());
console.log(preparePizza());
console.log(servePizza());
