// funtion in typescrit

function getName(name: string) {
    return `hello ${name}`
}

console.log('getName', getName("balinux"))

function getAge(age: number) {
    return age;
}

console.log('getAge', getAge(12))

// function tidak mereturn data
function printName(): void {
    console.log('void function');
}

printName()


// argunment

function multiplyNumber(num1: number, num2: number): number {
    return num1 * num2
}

const result = multiplyNumber(2, 5)

console.log('result', result)