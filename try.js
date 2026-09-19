// function sumOfNumber(numbers) {
//     sum = 0;
//     for (const number of numbers) {
//         sum = sum + number;
//     }
//     return sum;
// }
// // console.log(sumOfNumber[2, 3, 1, 4]);
// console.log(sumOfNumber([2, 3, 1, 4]))

function Tentimes(number) {
    const result = number * 10;
    // return result;
    console.log('output', result);  //this line will not be executed because it is after the return statement
}
Tentimes(5);