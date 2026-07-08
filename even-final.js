//9
function evenNumbersOnly(numbers) {

    const evens = [];

    for (const number of numbers) {

        if (number % 2 === 0) {
            console.log('even number is', number);
            evens.push(number);
            //return evens; //if we give return here then it will return the first even number and the loop will stop after that. so we need to give return statement outside of the loop.
        }
    }
    return evens;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = evenNumbersOnly(numbers);
console.log('even numbers are', evens);
