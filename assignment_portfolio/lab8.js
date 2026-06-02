
// ==========================================
// 1. Complete a Hello World tutorial in React, Django, or Spring Boot
// ==========================================
console.log("--- 1. React Hello World Component Architecture ---");

// This mimics how a React functional component renders UI data
function ReactHelloWorldComponent(props) {
    return {
        type: "div",
        props: {
            className: "welcome-container",
            children: `Hello, World! Welcome to React, ${props.username || "Developer"}.`
        }
    };
}

// Simulating React DOM rendering the component layout
const virtualDOMOutput = ReactHelloWorldComponent({ username: "Ian Donna" });
console.log("Rendered Virtual DOM element:", virtualDOMOutput.props.children);


// ==========================================
// 2. Write pure functions for mathematical operations
// ==========================================
console.log("\n--- 2. Pure Mathematical Functions ---");

// These functions are pure: no side effects, same inputs always yield same outputs
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

console.log(`Pure Add (12 + 8): ${add(12, 8)}`);
console.log(`Pure Multiply (5 * 6): ${multiply(5, 6)}`);


// ==========================================
// 3. Create a program using filter, map, and reduce on lists
// ==========================================
console.log("\n--- 3. Functional Array Operations (Filter, Map, Reduce) ---");

const numbersList = [10, 15, 20, 25, 30, 35, 40];
console.log("Initial List:", numbersList);

// Filter out odd numbers (keep only even numbers)
const evens = numbersList.filter(num => num % 2 === 0);
console.log("Filtered List (Evens Only):", evens);

// Map: Double each remaining number value
const doubledEvens = evens.map(num => num * 2);
console.log("Mapped List (Doubled Values):", doubledEvens);

// Reduce: Compute the cumulative grand total sum of the numbers
const cumulativeSum = doubledEvens.reduce((accumulator, current) => accumulator + current, 0);
console.log("Reduced Value (Grand Total Sum):", cumulativeSum);


// ==========================================
// 4. Use higher-order functions with callbacks
// ==========================================
console.log("\n--- 4. Higher-Order Functions & Callbacks ---");

// This is a higher-order function because it accepts another function as an argument
function processUserTransaction(item, price, callbackAction) {
    console.log(`Processing purchase details for: ${item}`);
    const taxCalculation = price * 0.10;
    const finalBill = price + taxCalculation;
    
    // Executing the callback step
    callbackAction(finalBill);
}

// Callback execution function
function printReceipt(totalAmount) {
    console.log(`Receipt Printed Successfully. Total Charged: K${totalAmount.toFixed(2)}`);
}

processUserTransaction("Coding Textbook", 150, printReceipt);


// ==========================================
// 5. Refactor imperative code into functional style
// ==========================================
console.log("\n--- 5. Imperative vs Functional Refactoring ---");

const rawScores = [45, 60, 75, 90];

// OLD WAY: Imperative Approach (Using loops and modifying states manually)
let imperativeTotal = 0;
for (let i = 0; i < rawScores.length; i++) {
    if (rawScores[i] >= 60) {
        imperativeTotal += rawScores[i];
    }
}
console.log(`Imperative Loop Result (Passing Total): ${imperativeTotal}`);

// NEW WAY: Functional Refactored Approach (Declarative, chainable methods)
const functionalTotal = rawScores
    .filter(score => score >= 60)
    .reduce((sum, score) => sum + score, 0);

console.log(`Functional Refactored Result (Passing Total): ${functionalTotal}`);