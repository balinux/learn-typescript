"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.User = User;
let user = new User("rio", 22);
console.log(user.name);
console.log(user.age);
