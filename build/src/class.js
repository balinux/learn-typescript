"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.getName = () => {
            return this.name;
        };
        this.name = name;
        this.age = age;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
// let user = new User("rio", 22);
// console.log(user.name);
// console.log(user.age);
/**
 * class inheriten/turunan
 * class ang mempunyai sifat turunan dari parent class
 */
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    /**
     * getRole merupakan nama function
     * { read: boolean; write: boolean } : merupakan type return
     * @returns
     * return {
          read: this.read,
          write: this.write,
        };
        bagian ini meruapak returnnya
     */
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
// class admin butuh 2 variable karna mengikuti construct dari parent
let admin = new Admin("rio", 22);
console.log(admin.getName());
console.log(admin.getRole());
admin.setName("rian");
console.log(admin.getName());
