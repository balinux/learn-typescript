export class User{
    public name:string
    public age:number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
}

let user = new User("rio",22)
console.log(user.name);
console.log(user.age);
