//The function takes 3 integer parameters: start, end, and step.
//The function should return an array of numbers from start to end counting by step.


function range(start, end, step) {
  let array = [];

  if(step < 1 || start > end || ( start === null || end === null || step === null)) {
    return array;
  }
  for (i = start; i <= end; i+=step) {
    array.push(i);
  }
  return array;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 5, 1));