export class User {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

// let user = new User("rio", 22);
// console.log(user.name);
// console.log(user.age);

/**
 * class inheriten/turunan
 * class ang mempunyai sifat turunan dari parent class
 */

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;

  /**
   * untuk menambah contructor pada class child maka dibutuhkan sebuah super constructor untuk mendefinisikan properti pada class parent
   */
  constructor(phone: string, name: string, age: number) {
    super(name, age);
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
  getRole(): { read: boolean; write: boolean } {
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
