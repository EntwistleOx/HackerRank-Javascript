// Complete the birthday function below.
function birthday(s, d, m) {
  let count = 0;
  for (let a = 0; a < s.length; a++) {
    let sum = 0;
    let slice = s.slice(a, a + m);
    sum = slice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
    if (sum === d && slice.length === m) {
      count += 1;
    }
  }
  return count;
}

// const s = [1, 2, 1, 3, 2];
// const d = 3;
// const m = 2;
// const s = [2, 2, 1, 3, 2];
// const d = 4;
// const m = 2;
const s = [1, 1, 1, 1, 1, 1];
const d = 3;
const m = 2;
let result = birthday(s, d, m);

console.log(result + '\n');
