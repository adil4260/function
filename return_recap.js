//7
function add(price1, price2) {
    const total = price1 + price2;
    return total;
    //return price1 + price2;
}
const bill = add(100, 200);

const bill2 = add(500, 600);

console.log(bill, bill2);



//
function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multi = sum * diff;
    return multi;
}
const multi = doMath(7, 5);
console.log(multi);