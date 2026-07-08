function Tentimes(number) {
    const result = number * 10;

    // console.log(result); //output: 50

    return result; //this line will return the value of result to the caller function
}

//Tentimes(5);

//thats why we use return statement to get the value of result outside the function
const output = Tentimes(5);

console.log(output);