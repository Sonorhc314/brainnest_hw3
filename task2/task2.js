//task2
//constant declaration
//-----------------------------
const PI = Math.PI;
//-----------------------------
//a) calculate diagonal of a square
//-----------------------------
let side = 9;
function square_diagonal(side) {
  let diagonal = Math.sqrt(2 * Math.pow(side, 2));
  return diagonal.toFixed(3);
}
console.log(
  `diagonal of a square with side ${side} is ${square_diagonal(side)}`
);
//-----------------------------
//b) area of a triangle
//-----------------------------
let side1 = 5;
let side2 = 6;
let side3 = 7;
function herons_formula(side1, side2, side3) {
  let semi_per = (side1 + side2 + side3) / 2;
  area = Math.sqrt(
    semi_per * (semi_per - side1) * (semi_per - side2) * (semi_per - side3)
  );
  return area.toFixed(3);
}
console.log(
  `area of a triangle with sides ${side1}, ${side2} and ${side3} is ${herons_formula(
    side1,
    side2,
    side3
  )}`
);
//-----------------------------
//c) area of a triangle
//-----------------------------
let radius = 4;
function circumference(our_radius) {
  let result = 2 * (PI * our_radius);
  return result.toFixed(3);
}
function surface_area(our_radius) {
  let result = PI * Math.pow(our_radius, 2);
  return result.toFixed(3);
}
console.log(
  `circumference of a circle with radius ${radius} is ${circumference(radius)}`
);
console.log(
  `surface are of a circle with radius ${radius} is ${surface_area(radius)}`
);
