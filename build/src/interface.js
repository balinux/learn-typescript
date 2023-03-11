"use strict";
// setiap class harummengimplementasi property yang ada pada interface
class Asus {
    on() {
        console.log("Laptop On");
    }
    off() {
        console.log("Laptop Off");
    }
    constructor(name) {
        this.name = name;
    }
}
class MacBook {
    on() {
        console.log("Macbook On");
    }
    off() {
        console.log("Macbook Off");
    }
    constructor(name) {
        this.keyboardLight = true;
        this.name = name;
    }
}
let mba2015 = new MacBook("Macbook Air 2015");
console.log(mba2015);
mba2015.on();
mba2015.off();
