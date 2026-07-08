//6
function Tentimes(number) {
    const result = number * 10;
    return result;
    console.log('output', result);  //this line will not be executed because it is after the return statement
}
Tentimes(5);

const output = Tentimes(5);
console.log('output', output); //output: 50
