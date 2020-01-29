// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    return ar.reduce((acu, cur) => acu + cur, 0)
}

const ar = [
    1000000001,
    1000000002,
    1000000003,
    1000000004,
    1000000005
]
let result = aVeryBigSum(ar);

console.log(result + "\n");

