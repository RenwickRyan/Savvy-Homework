let pizzaPlace = `Satan's Pizza Den`;
let numberOfToppings = 666;

console.log(pizzaPlace);
console.log(numberOfToppings);
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(
  `Welcome to the, ` +
    pizzaPlace +
    ` home of over ` +
    numberOfToppings +
    ` toppings!`
);

if (numberOfToppings < 10) {
  console.log(`"Quality, not quantity."`);
} else {
  console.log(`"A whole lot of pizza."`);
}

for (i = 2; i <= 666; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
