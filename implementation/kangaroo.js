// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {

    let first = []
    let second = []
    let jumpA = x1
    let jumpB = x2
    let result = 'NO'
    for (let i = jumpA; i < 20; i++) {
        jumpA = jumpA + v1
        first.push(jumpA)
    }

    for (let j = jumpB; j < 20; j++) {
        jumpB = jumpB + v2
        second.push(jumpB)
    }

    for (let y = 0; y < first.length; y++) {
        for (let z = 0; z < second.length; z++) {
            if (first[y] === second[z] && y === z) {
                result = 'YES'
            } 
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
const x1 = 0
const v1 = 2
const x2 = 5
const v2 = 3
let result = kangaroo(x1, v1, x2, v2);

console.log(result + "\n");
