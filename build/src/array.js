"use strict";
/**
 * array
 * jika type tidak di isi maka type array akan mengikuti type dari value
 */
let array = [1, 2, 3];
array = [4.5];
console.log('array', array);
// arrray number
let arrNumber;
arrNumber = [1, 2, 3];
console.log('arrNumber', arrNumber);
// array string
let arrayString;
arrayString = ['a', 'b', 'c'];
console.log('arrayString', arrayString);
// array any
let randomArray;
randomArray = [1, 2, "tes"];
console.log('randomArray', randomArray);
/**
 * toefl adalah array yang memiliki nilai terbatas
 * */
let address;
address = ['bali', 123];
console.log('address', address);
// contoh salah
// address = ['bali', "dua tiga"], terjadi error karna array kedua nilainya harus number
