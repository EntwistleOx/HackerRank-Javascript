// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let entry = arr.sort()
    let n = entry.length
    let min = []
    let max = []
    let rMin = 0
    let rMax = 0

    for (let i = 0; i < n - 1; i++) {
        rMin += arr[i]
    }

    for (let i = n - 1; i > 0; i--) {
        rMax += arr[i]
    }

    return (rMin + ' ' + rMax)
}

const arr = [7, 69, 2, 221, 8974]
const result = miniMaxSum(arr);
console.log(result)