// Complete the staircase function below.
function staircase(n) {
    let numeral = '#'
    let space = ' '
    let result = ''

    for (let i = 0; i < n; i++) {
        result += space.repeat(n - i - 1) + numeral.repeat(i + 1)
        if (i !== n - 1) {
            result += '\n'
        }
    }

    return result
}

const n = 6;
const result = staircase(n);
console.log(result)

