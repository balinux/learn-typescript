"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Keyboard_1 = require("./Keyboard");
// karna class laptop akan digunakan juga untuk class lain,makaperlu dilakukan abstact
class BaseLaptop {
    constructor(name, type, withNumeric, withTouchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchButton = withTouchButton;
    }
    a() {
        console.log((0, Keyboard_1.a)());
    }
    b() {
        console.log((0, Keyboard_1.b)());
    }
}
exports.default = BaseLaptop;
