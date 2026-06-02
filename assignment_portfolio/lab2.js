
// ==========================================
// 1. Declare variables of different types and print them
// ==========================================
console.log("--- 1. Variable Types ---");

let userName = "Ian Donna";        // String
let userAge = 21;                  // Number
let isStudent = true;              // Boolean
let emptyValue = null;             // Null
let unassigned;                    // Undefined

console.log(`String: ${userName} (${typeof userName})`);
console.log(`Number: ${userAge} (${typeof userAge})`);
console.log(`Boolean: ${isStudent} (${typeof isStudent})`);
console.log(`Null: ${emptyValue} (Type returns object due to legacy JS behavior)`);
console.log(`Undefined: ${unassigned} (${typeof unassigned})`);


// ==========================================
// 2. Demonstrate value vs reference behavior
// ==========================================
console.log("\n--- 2. Value vs Reference Behavior ---");

// Value Behavior (Primitives copy the actual value)
let originalScore = 100;
let copiedScore = originalScore; 
copiedScore = 90; // Changing the copy does NOT affect the original
console.log(`Primitives (Value): Original=${originalScore}, Copy=${copiedScore}`);

// Reference Behavior (Objects copy the memory address/pointer)
let originalUser = { name: "Ian" };
let copiedUser = originalUser;
copiedUser.name = "Donna"; // Changing the copy DOES change the original
console.log(`Objects (Reference): Original Name=${originalUser.name}, Copy Name=${copiedUser.name}`);


// ==========================================
// 3. Try to modify constants and document the errors
// ==========================================
console.log("\n--- 3. Modifying Constants Error ---");

const MAX_LIMIT = 500;
console.log(`Constant defined: MAX_LIMIT = ${MAX_LIMIT}`);

try {
    // This line will intentionally trigger a runtime error
    MAX_LIMIT = 600; 
} catch (error) {
    console.log(`[Documented Error Summary]: ${error.message}`);
}


// ==========================================
// 4. Show scope differences between var, let, const
// ==========================================
console.log("\n--- 4. Scope Differences ---");

if (true) {
    var blockVar = "I am visible outside the block!";
    let blockLet = "I am hidden outside the block!";
    const blockConst = "I am also hidden outside the block!";
}

console.log(`var (Function/Global scoped): ${blockVar}`);

try {
    console.log(blockLet);
} catch (error) {
    console.log(`let (Block scoped) Error: ${error.message}`);
}

try {
    console.log(blockConst);
} catch (error) {
    console.log(`const (Block scoped) Error: ${error.message}`);
}