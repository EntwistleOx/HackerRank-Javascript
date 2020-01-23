// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let aPoint = [];
    let bPoint = [];
    for (let i = 0; i < 3; i++) {
        if ((a[i] >= 1 && a[i] <= 100) && (b[i] >= 1 && b[i] <= 100)) {
            if (a[i] > b[i]) {
                aPoint.push(1);
            } else if (a[i] < b[i]) {
                bPoint.push(1);
            }
        }
    }
    const aResult = aPoint.reduce((acu, cur) => acu + cur, 0)
    const bResult = bPoint.reduce((acu, cur) => acu + cur, 0)
    return [aResult, bResult]
}

const a = [5, 6, 7];

const b = [3, 6, 10];

const result = compareTriplets(a, b);

console.log(result.join(' ') + '\n');
