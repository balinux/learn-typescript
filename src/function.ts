// funtion in typescrit

function getName(name:string) {
    return `hello ${name}`
}

console.log('getName', getName("balinux"))

function getAge(age:number) {
    return age;
}

console.log('getAge', getAge(12))

// function tidak mereturn data
function printName():void {
    console.log('void function');
}

printName()