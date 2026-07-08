//8
function evenNumbersOnly(numbers) {
    console.log(numbers);

    for (const number of numbers) {
        console.log(number);
        if (number % 2 === 0) {
            console.log('even number is', number);
        }
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
evenNumbersOnly(numbers);


