// type string untuk menulis data string
let home: string = "rio";
console.log("home", home);

// number untuk data number
let numberData: number = 12;
console.log("numberData", numberData);

// boolean:
let isMaarried: boolean;
isMaarried = true;
console.log("isMaarried", isMaarried);

// any semua data
let randomData: any = "random";
randomData = 23;
console.log("randomData", randomData);

/**
 * type union untuk handle seperti nomor hp dengan kode negara
 */

let phone: number | string;
phone = 62816123;
phone = "082123123";
