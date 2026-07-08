function sumOfNumber(numbers) {
    console.log(numbers);
}

//const numbs = sumOfNumber([1, 2, 3, 4, 5]);
// const sum= sumOfNumber(numbs);
//console.log('sum of number is', numbs); //output: sum of number is undefined




//for loop
function sumOfNumber(numbers) {

    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const number = sumOfNumber([1, 2, 3, 4, 5]);
// const sum= sumOfNumber(numbs);
console.log('sum of number is', number);