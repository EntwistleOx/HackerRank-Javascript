/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {

    let result = []
    for (let i = 0; i < grades.length; i++) {

        let next = 0
        for (let j = grades[i]; j <= 100; j++) {
            if (j % 5 === 0) {
                next = j
                break
            }
        }
        if ((grades[i]) < 38) {
            result.push(grades[i])
        } else {
            if ((next - grades[i]) < 3) {
                result.push(next)
            } else {
                result.push(grades[i])
            }
        }
    }
    return result
}

let grades = [73, 67, 38, 33];
const result = gradingStudents(grades);
console.log(result.join('\n') + '\n');
