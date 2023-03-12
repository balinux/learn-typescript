import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("Zenbook", true, true);
console.log(asus);
let macbook = new Macbook(2015, false, true);
console.log(macbook);
macbook.a()
