"use strict";
/**
 * abstrack class adalah class yang tidak bisa di instance langusung dari luar class itu sendiri,melainkan harus menginstance class shildnya
 * skenario
 * terdapat class bernama kendaraan, memiliki chil bernama mobil, dan motor, mobil memiliki roda 4, danmotor2
 *
 */
class Vehicle {
    start() {
        return "Broom";
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
let car = new Car();
console.log(car.wheels);
console.log(car.start());
class Bike extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let bike = new Bike();
console.log(bike.wheels);
console.log(bike.start());
