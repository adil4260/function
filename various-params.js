//10
function evenSizedStrings(str) {
    const size = str.length;
    console.log(str, size);
}
// evenSizedStrings('comilla  university');  //output: comilla  university 20


//
function evenSizedStrings(str) {
    const size = str.length;
    console.log(str, - size);
    if (size % 2 === 0) {
        console.log('even sized string');

        return true;
    }
    else {
        console.log('odd sized string');

        return false;
    }
}
evenSizedStrings('comilla  university'); //output: comilla  university 20 even sized string true
evenSizedStrings('comilla  collage'); //output: comilla  collage 18 even sized string true