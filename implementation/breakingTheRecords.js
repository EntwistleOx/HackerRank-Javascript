// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let counterHigh = 0;
    let counterLow = 0;
    let highRecord = scores[0];
    let lowRecord = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highRecord) {
            highRecord = scores[i]
            counterHigh++
        }
        if (scores[i] < lowRecord) {
            lowRecord = scores[i]
            counterLow++
        }
    }
    return [counterHigh, counterLow]
}

// const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const result = breakingRecords(scores);

console.log(result.join(' ') + '\n');