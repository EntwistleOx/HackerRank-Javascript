// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    let result = 'NO'
    for (let i = 0; i <= 10000; i++) {
        if (x1 + v1 * i === x2 + v2 * i) {
            result = 'YES'
        }
    }
    return result;
}

// YES
// const x1 = 0
// const v1 = 3
// const x2 = 4
// const v2 = 2

// NO
// const x1 = 0
// const v1 = 2
// const x2 = 5
// const v2 = 3

// YES
// const x1 = 2081
// const v1 = 8403
// const x2 = 9107
// const v2 = 8400

// NO
const x1 = 21
const v1 = 6
const x2 = 47
const v2 = 3

let result = kangaroo(x1, v1, x2, v2);

console.log(result + "\n");

