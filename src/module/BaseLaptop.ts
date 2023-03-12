import ILaptop from "./iLaptop";
import { a, b } from "./Keyboard";

// karna class laptop akan digunakan juga untuk class lain,makaperlu dilakukan abstact

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(
    name: string,
    type: T,
    withNumeric: boolean,
    withTouchButton: boolean
  ) {
    this.name = name;
    this.type = type;
    this.withNumeric = withNumeric;
    this.withTouchButton = withTouchButton;
  }

  a(): void {
    console.log(a());
  }

  b(): void {
    console.log(b());
  }
}

export default BaseLaptop;
