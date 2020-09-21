// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let appleDistance = apples.map(x => a + x)
    let orangeDistante = oranges.map(y => b + y)

    let applesArr = appleDistance.filter(total => total >= s && total <= t)
    let orangesArr = orangeDistante.filter(total => total >= s && total <= t)

    const totalApples = applesArr.length
    const totalOranges = orangesArr.length
    return totalApples + '\n' + totalOranges
}

const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

const result = countApplesAndOranges(s, t, a, b, apples, oranges);

console.log(result);