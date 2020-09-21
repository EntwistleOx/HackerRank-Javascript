// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let max = Math.max(...ar)

    let count = 0

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === max) {
            count++
        }
    }

    return count
}

const ar = [3, 2, 1, 3]
let result = birthdayCakeCandles(ar);
console.log(result + "\n");