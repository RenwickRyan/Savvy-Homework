let pizzaToppings = ["pepperoni", " sausage", "mushrooms", "pineapple."];
let size = ["small", "medium", "large"];
let crust = ["thin crust", " thick crust"];
let customerName = " Ryan";

function greetCustomer() {
  return `Welcome to Devil's Pizza Den. Our toppings are ${pizzaToppings}`;
}
console.log(greetCustomer());

let customerOrder1 = [size[1], crust[1], pizzaToppings[1]];

function getPizzaOrder() {
  return `One ${customerOrder1} pizza for ${customerName}coming right up!`;
}
console.log(getPizzaOrder());

function preparePizza() {
  return `cooking pizza... ${customerOrder1} pizza for ${customerName}.`;
}
console.log(preparePizza());

function servePizza() {
  return `Order up! Here is your ${customerOrder1} pizza...Enjoy!`;
}
console.log(servePizza());

// brandon's test functions
// function brandonIsAwesome() {
//   return "hey im cool";
// }
// function colorOfShirt(shirt) {
//   return `and I'm wearing a blue ${shirt}`;
// }
// function putItAllTogether(greeting, clothingtype) {
//   console.log(`${greeting} ${clothingtype}`);
// }
// function lastOne(shirtType) {
//   const greeting = brandonIsAwesome();
//   const shirt = colorOfShirt(shirtType);
//   putItAllTogether(greeting, shirt);
// }
// lastOne("v-neck");
