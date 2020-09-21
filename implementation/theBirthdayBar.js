// Complete the birthday function below.
function birthday(s, d, m) {

    for (let i = 0; i < s.length; i++) {



        console.log((s[i]) + (s[i] + 1))


    }
    return [s, d, m]
}

const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;
// Result 2
const result = birthday(s, d, m);
console.log(result + '\n');