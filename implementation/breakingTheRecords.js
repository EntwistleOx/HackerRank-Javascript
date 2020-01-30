// Complete the breakingRecords function below.
function breakingRecords(scores) {

    let countH = 0;
    let countL = 0;

    for (let i = 0; i < scores.length; i++) {

        for (let j = 1; j < scores.length; j++) {

            console.log(scores[j], scores[i])

        }

    }

    return [countH, countL]
}

const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
const result = breakingRecords(scores);

console.log(result.join(' ') + '\n');