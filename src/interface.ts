interface Laptop {
  on(): void;
  off(): void;
  name: string;
}

// setiap class harummengimplementasi property yang ada pada interface
class Asus implements Laptop {
  on(): void {
    console.log("Laptop On");
  }
  off(): void {
    console.log("Laptop Off");
  }
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class MacBook implements Laptop {
  on(): void {
    console.log("Macbook On");
  }
  off(): void {
    console.log("Macbook Off");
  }
  name: string;
  keyboardLight: boolean = true;

  constructor(name: string) {
    this.name = name;
  }
}

let mba2015 = new MacBook("Macbook Air 2015");
console.log(mba2015);
mba2015.on()
mba2015.off()
