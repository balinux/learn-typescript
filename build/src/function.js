"use strict";
// funtion in typescrit
function getName(name) {
    return `hello ${name}`;
}
console.log('getName', getName("balinux"));
function getAge(age) {
    return age;
}
console.log('getAge', getAge(12));
// function tidak mereturn data
function printName() {
    console.log('void function');
}
printName();
// argunment
function multiplyNumber(num1, num2) {
    return num1 * num2;
}
const result = multiplyNumber(2, 5);
console.log('result', result);
// ini cara implemetasi type funtion pada function add
const add = (va1, val2) => {
    return va1 + val2;
};
// cara  implementasi
console.log('add', add(12, 23));
