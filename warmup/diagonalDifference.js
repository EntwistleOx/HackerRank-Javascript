/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let first = 0;
    let second = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] >= -100 && arr[i][j] <= 100) {
                if (i === j) {
                    first += arr[i][j];
                }
                if (j === arr.length - 1 - i) {
                    second += arr[i][j];
                }
            }
        }
    }

    const total = first > second ? first - second : second - first
    return total;
}

let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

const result = diagonalDifference(arr);
console.log(result + '\n');
