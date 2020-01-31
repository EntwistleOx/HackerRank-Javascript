/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    let n = a.length
    let m = b.length
    let count = 0

    for (let i = 1; i <= 100; i++) {
        let flag = true

        for (let j = 0; j < n; j++) {
            if (i % a[j] !== 0) {
                flag = false
                break
            }
        }

        if (flag) {
            for (let x = 0; x < m; x++) {
                if (b[x] % i !== 0) {
                    flag = false
                    break
                }
            }
        }

        if (flag) {
            count++
        }
    }
    return count
}

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// [2, 4]
// [16, 32, 96]
// 4 - 8 - 16
// result 3
const arr = [2, 4];
const brr = [16, 32, 96];
const total = getTotalX(arr, brr);
console.log(total + '\n');