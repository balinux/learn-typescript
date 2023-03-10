"use strict";
// funtion in typescrit
function getName(name) {
    return `hello ${name}`;
}
console.log("getName", getName("balinux"));
function getAge(age) {
    return age;
}
console.log("getAge", getAge(12));
// function tidak mereturn data
function printName() {
    console.log("void function");
}
printName();
// argunment
function multiplyNumber(num1, num2) {
    return num1 * num2;
}
const result = multiplyNumber(2, 5);
console.log("result", result);
// ini cara implemetasi type funtion pada function add
const add = (va1, val2) => {
    return va1 + val2;
};
// cara  implementasi
console.log("add", add(12, 23));
/**
 * default parameter
 * di variable last merupakan contoh penggunaan defaultparameter
 */
const fullname = (first, last = "juniyantara") => {
    return first + " " + last;
};
let fullName = fullname("rio");
let fullName2 = fullname("khalid", "putra");
console.log(fullName);
console.log(fullName2);
/**
 * Optional Parameter
 * optional parameter di identifikasi dengan menggunakan tanda tanya(?)
 * jika parameter optional tidak diisi, maka akan memberikan data undefined
 * bisa di handle dengan Nullish coalescing operator (??)
 */
const getUmur = (tahunLahir, tahunSekarang) => {
    return (tahunSekarang !== null && tahunSekarang !== void 0 ? tahunSekarang : 0) - tahunLahir;
};
let umur = getUmur(1992, 2023);
console.log(umur);
