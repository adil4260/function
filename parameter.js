function vaatkhao() {
    console.log("Hello, World!");
    console.log('hand wash before eating');
    console.log('eat food');
    console.log('wash hand after eating');
}
// vaatkhao();



function square(number) {
    console.log(number);

    console.log('valu of square is', number);

    const borgo = number * number;
    console.log('value of borgo is', borgo);
}
square(4);
square(5);
square(322)


function add(num1, num2) {
    const sum = num1 + num2;
    console.log('value of sum is', sum);
}
add(4, 5);
add(10, 20);


function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log('value of total is', total);
}
addAll(1, 2, 3, 4,); //output: value of total is NaN
addAll(1, 2, 3, 4, 5);