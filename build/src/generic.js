"use strict";
/**
 * Generic merupakan sebuah type data yang dinamis
 * T merupakan penanda generic tapi bisa menggunkana karakterlainnya
 *
 * saat menggunakan function myData maka typenya pun akan otomatis teridentifikasi
 * contoh, jika type parameter data adalah string,maka kembaliannya juga otomatis string
 */
function myData(params) {
    return params;
}
// otomatis mendeteksi string
console.log(myData("Rio Juniyantara putra").length);
// otomatis mendeteksi int
console.log(myData(123.22).toFixed());
// contoh arrow function
const arrowf = (value) => {
    return value;
};
console.log(arrowf("balinux").length);
