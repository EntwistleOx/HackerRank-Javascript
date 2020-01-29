/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    const parts = s.split(':')
    let hours = ''
    let minutes = ''
    let seconds = ''
    let fixHour = ''

    if (parts[2].includes('AM')) {
        if (parts[0] == 12) {
            fixHour = '00'
        } else {
            fixHour = parts[0]
        }
    } else {
        if (parts[0] == 12) {
            fixHour = parts[0]
        } else {
            fixHour = parseInt(parts[0]) + 12
        }
    }

    hours = fixHour
    minutes = parts[1]
    seconds = parts[2].slice(0, 2)

    return hours + ':' + minutes + ':' + seconds

}


const s = '07:05:45PM';

let result = timeConversion(s);

console.log(result + "\n");