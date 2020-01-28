/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

// Brute force solves this problem, but we can do better (we can solve a_i <= 10^9)
// First find the LCM of array A, the GCD of B, then we can simply check how many divisors are there in GCD_B/LCM_A.
// In case B%A != 0, output 0.
// How to count the number of divisors of a number? We can factorize a number into primes:
// X = p_1^r_1 * p_2^r_2 * ... * p_n^r_n
// Then the number of divisors is simply (r_1 + 1) * (r_2 + 1) * ... * (r_n + 1). (1 and X inclusive)
// However I'm too lazy to implement this :-) Just brute force here.

// The integers that are between A and B are 4, 8, and 16.Though this problem can be solved with brute-force, there is a nice fast solution.
// – x is divisible by all numbers of A if and only if it is divisible by their least common multiple. Denote it as l.
// – All numbers of B are divisible by x if and only if the greatest common divisor of all numbers of B is divisible by B. Denote it as r.
// – Now we have to find the number of x such that r is divisible by x and x is divisible by l. If r is not divisible by l, no such x exists. 
// Otherwise, we can divide r, x, and l by l. Now it’s just the number of divisors of (r/l) which can be found in Sqrt(c) time or even faster, 
// where C is the maximum number of the sets.

function getTotalX(a, b) {

    // A -> MCM
    // Calcular minimo comun multiplo de 2, 4

    // B -> MCD
    // Calcular maximo comun divisor de 16, 32, 96

    let total = 0
    for (let i = 0; i <= 100; i++) {
        if (i % a[i] === 0) {
            // console.log(a[i], 'a')
            total++
        }

        // if (i % b[i] === 0) {
        if (b[i] % i === 0) {
            console.log(b[i], 'b')
            total++
        }
    }
    return total
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