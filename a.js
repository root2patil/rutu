// 1. Table of a number
const table = (num) => {
    for (let i = 1; i <= 10; i++) console.log(`${num} x ${i} = ${num * i}`);
};
table(5);

// 2. Fibonacci series (up to 7 numbers)
const fibonacci = (n, a = 0, b = 1, series = [0, 1]) => {
    if (series.length >= n) return series;
    return fibonacci(n, b, a + b, [...series, a + b]);
};
console.log(fibonacci(7));

// 3. Leap year check
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(isLeapYear(2024) ? "Leap Year" : "Not a Leap Year");

// 4. Perfect number check
const isPerfectNumber = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) if (num % i === 0) sum += i;
    return sum === num;
};
console.log(isPerfectNumber(6) ? "Perfect Number" : "Not a Perfect Number");

// 5. Animal prototype with inheritance
function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
}
Animal.prototype.makeSound = function () {
    console.log(`${this.type} says ${this.sound}`);
};

function Dog(name) {
    Animal.call(this, "Dog", "Woof");
    this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);

function Cat(name) {
    Animal.call(this, "Cat", "Meow");
    this.name = name;
}
Cat.prototype = Object.create(Animal.prototype);

const dog1 = new Dog("Bruno");
const cat1 = new Cat("Whiskers");

dog1.makeSound();
cat1.makeSound();
