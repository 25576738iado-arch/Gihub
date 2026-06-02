
// ==========================================
// 1. Create a Vehicle class with properties and a Car subclass
// 4. Override a method in each subclass (Demonstrated here)
// ==========================================
console.log("--- 1 & 4. Vehicle & Car Subclass ---");

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        return "The vehicle engine starts running.";
    }
}

class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model); // Calls parent constructor
        this.doors = doors;
    }

    // Overriding the parent startEngine method
    startEngine() {
        return `The ${this.make} ${this.model}'s push-button engine roars to life!`;
    }
}

const myCar = new Car("Toyota", "Supra", 2);
console.log(myCar.startEngine());


// ==========================================
// 2. Create a Student class with private properties and getters/setters
// ==========================================
console.log("\n--- 2. Student Class with Private Properties ---");

class Student {
    // '#' marks properties as strictly private in JavaScript
    #studentID;
    #grade;

    constructor(name, studentID, grade) {
        this.name = name;
        this.#studentID = studentID;
        this.#grade = grade;
    }

    // Getter for Grade
    get grade() {
        return this.#grade;
    }

    // Setter for Grade with validation logic
    set grade(newGrade) {
        if (newGrade >= 0 && newGrade <= 100) {
            this.#grade = newGrade;
        } else {
            console.log("Error: Grade must be between 0 and 100.");
        }
    }
}

const student1 = new Student("Ian Donna", "STU12345", 85);
console.log(`Initial Grade: ${student1.grade}%`);
student1.grade = 95; // Uses setter
console.log(`Updated Grade: ${student1.grade}%`);


// ==========================================
// 3. Create multiple animal classes (Dog, Cat, Bird) inheriting from Animal
// 4. Override a method in each subclass (Demonstrated here)
// ==========================================
console.log("\n--- 3 & 4. Animal Inheritance & Polymorphism ---");

class Animal {
    makeSound() {
        return "Some generic animal noise.";
    }
}

class Dog extends Animal {
    makeSound() { return "Woof! Woof!"; } // Overridden
}

class Cat extends Animal {
    makeSound() { return "Meow!"; } // Overridden
}

class Bird extends Animal {
    makeSound() { return "Chirp! Chirp!"; } // Overridden
}

const zoo = [new Dog(), new Cat(), new Bird()];
zoo.forEach(animal => console.log(`${animal.constructor.name} says: ${animal.makeSound()}`));


// ==========================================
// 5. Create a BankAccount class demonstrating encapsulation
// ==========================================
console.log("\n--- 5. BankAccount Encapsulation ---");

class BankAccount {
    #balance; // Private field

    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. Current balance: $${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew $${amount}. Remaining balance: $${this.#balance}`);
        } else {
            console.log("Rejected: Insufficient funds or invalid amount.");
        }
    }
}

const account = new BankAccount("Ian Donna", 500);
account.deposit(200);
account.withdraw(150);
console.log(`Final verified secure balance: $${account.getBalance()}`);