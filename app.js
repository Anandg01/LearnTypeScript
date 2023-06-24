"use strict";
const num1Elementt = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonEl = document.querySelector('button');
const aryyNumber = [];
const aryyString = [];
function add(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
        return (num1 + num2);
    }
    if (typeof (num1) === 'string' && typeof (num2) === 'string') {
        return (num1 + '' + num2);
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj);
}
buttonEl.addEventListener('click', () => {
    const num1 = num1Elementt.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    console.log(result);
    aryyNumber.push(result);
    const stringResult = add(num1, num2);
    console.log(stringResult);
    aryyString.push(stringResult);
    printResult({ val: result, timestemp: new Date });
    console.log(aryyNumber, aryyString);
});
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('It worked');
    }, 1000);
});
myPromise.then((res) => {
    console.log(res.split('w'));
});
