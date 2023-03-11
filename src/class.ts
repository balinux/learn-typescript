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
  private _email: string = "";
  constructor(name: string, age: number) {
    super(name, age);
  }

  //   untuk mengubah dan mengambil data email private maka dibutuhkan getter dan setter
  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

let exampleGetSet = new GetterSetter("rio",22)
exampleGetSet.setName("rio@ganteng.com")
console.log(exampleGetSet.getName());


/**
 * sebuah properti atau method yang bisa di akses dari calss itu sendiri tanpa menginstance classnya
 *
 */
class StaticPropertyMethod extends User {
    private _email: string = "";

    // karna static jadi tidak perlu di masukkan ke constructor
    static getRoleName: string = "Admin"

    constructor(name: string, age: number) {
      super(name, age);
    }

    static getName(){
        return "Balinux"
    }
   }
  
  let staticPropertyMethod = StaticPropertyMethod.getRoleName

  console.log(staticPropertyMethod);
  console.log(StaticPropertyMethod.getName());
  