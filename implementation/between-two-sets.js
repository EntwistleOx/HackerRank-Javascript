/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {

    let total = ''
    for(let i = 0; i <= 100; i++){
        
        if(a[i] % i === 0) {
           console.log(a[i], i) 
        }
    }

    for(let j = 0; j <= 100; j++){
        if(j % b[j] === 0) {
            console.log(b[j], j)
        }
    }
    return total 
}


// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// [2, 4]
// [16, 32, 96]
// result 3
const arr = [2, 4];
const brr = [16, 32, 96];
const total = getTotalX(arr, brr);
console.log(total + '\n');
