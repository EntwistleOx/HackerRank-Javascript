/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    return ar.reduce((acu, cur) => acu + cur, 0)
}

const ar = [1, 2, 3, 4, 10, 11]
let result = simpleArraySum(ar);

console.log(result);
