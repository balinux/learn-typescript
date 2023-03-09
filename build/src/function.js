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
