//task3
//a) accepts 2 ints and compares them
//--------------------------------------
var int1 = prompt("First digit: ");
var int2 = prompt("Second digit: ");
function display_larger(first, second) {
  let bigger;
  if (first < second) {
    bigger = second;
  } else {
    bigger = first;
  }
  console.log(`${bigger} is the larger one`);
  alert(`${bigger} is the larger one`);
}
display_larger(int1, int2);
//--------------------------------------
//b) checks if in is even or odd
function even_odd(value) {
  if (value % 2 == 0) {
    console.log(`${value} is an even number`);
  } else {
    console.log(`${value} is an odd number`);
  }
}
even_odd(int1);
even_odd(int2);
even_odd(90);
even_odd(101);
even_odd(28);
