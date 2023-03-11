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
    /**
     * untuk menambah contructor pada class child maka dibutuhkan sebuah super constructor untuk mendefinisikan properti pada class parent
     */
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this.phone = phone;
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
let admin = new Admin("082082082", "rio", 22);
console.log(admin);
console.log(admin.getRole());
console.log(admin.getRole());
admin.setName("rian");
console.log(admin.getName());
/**
 * Getter and Setter
 * Setter: validasi untuk mengubah property pada class
 * getter: mengambil property pada class
 *
 * ENKAPSULASI
 * public: bisa di akses di semua class/ dari luar kelas
 * protected: hanya bisa di akses dari class tersebut, dan class turunannya
 * private: hanya bisa diakses dari class itu sendiri
 */
class GetterSetter extends User {
    constructor(name, age) {
        super(name, age);
        this._email = "";
    }
    //   untuk mengubah dan mengambil data email private maka dibutuhkan getter dan setter
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
let exampleGetSet = new GetterSetter("rio", 22);
exampleGetSet.setName("rio@ganteng.com");
console.log(exampleGetSet.getName());
/**
 * sebuah properti atau method yang bisa di akses dari calss itu sendiri tanpa menginstance classnya
 *
 */
class StaticPropertyMethod extends User {
    constructor(name, age) {
        super(name, age);
        this._email = "";
    }
    static getName() {
        return "Balinux";
    }
}
// karna static jadi tidak perlu di masukkan ke constructor
StaticPropertyMethod.getRoleName = "Admin";
let staticPropertyMethod = StaticPropertyMethod.getRoleName;
console.log(staticPropertyMethod);
console.log(StaticPropertyMethod.getName());
