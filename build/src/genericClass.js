"use strict";
class List {
    constructor(elements) {
        this.data = elements;
    }
    add(elements) {
        this.data.push(elements);
    }
    addMultipleElemetn(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
// jika mneggunakan rest element(...element) maka saat instanceclasstidak perlu menggunakan []
let numbers = new List([1, 2, 3]);
numbers.add(4);
numbers.addMultipleElemetn(5, 6, 7);
console.log(numbers.getAll());
// jika ingin menginstance tidak hanya number
let randomData2 = new List([22, 33, "44"]);
console.log(randomData2.getAll());
