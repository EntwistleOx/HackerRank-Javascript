// Complete the plusMinus function below.
function plusMinus(arr) {
    let isPositive = 0
    let isNegative = 0
    let isZero = 0
    let result = []
    const n = arr.length
    for (let i = 0; i < n; i++) {
        let check = Math.sign(arr[i])
        if (check === 1) {
            isPositive += 1
        } else if (check === -1) {
            isNegative += 1
        } else {
            isZero += 1
        }
    }
    const rPositive = (isPositive / n).toFixed(6)
    const rNegative = (isNegative / n).toFixed(6)
    const rZero = (isZero / n).toFixed(6)
    return (rPositive + '\n' + rNegative + '\n' + rZero)
}

const arr = [-4, 3, -9, 0, 4, 1]

const result = plusMinus(arr);

console.log(result)
