function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));  //output: 10
// console.log(doubleOrTriple(22, false));  //output: 66


//array

function numberOfEliments(numbers) {
    const len = numbers.length;
    return len;
}
numberOfEliments([1, 2, 3, 4, 5]); //output: 5