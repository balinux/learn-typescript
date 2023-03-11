/**
 * abstrack class adalah class yang tidak bisa di instance langusung dari luar class itu sendiri,melainkan harus menginstance class shildnya
 * skenario
 * terdapat class bernama kendaraan, memiliki chil bernama mobil, dan motor, mobil memiliki roda 4, danmotor2
 *
 */

abstract class Vehicle {
  // kendaraan memiliki nilai yangbelim pasti makanya di buah abstract
  abstract wheels: number;

  start(): string {
    return "Broom";
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

let car = new Car();
console.log(car.wheels);
console.log(car.start());

class Bike extends Vehicle {
  wheels: number = 2;
}

let bike = new Bike()
console.log(bike.wheels);
console.log(bike.start());
