
// ==========================================
// 1. Create a simple calculator app
// ==========================================
function simpleCalculator(num1, num2, operator) {
    console.log(`--- 1. Calculator: ${num1} ${operator} ${num2} ---`);
    let result;
    
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("Error: Division by zero is not allowed.");
                return null;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Error: Invalid operator supplied.");
            return null;
    }
    console.log(`Result: ${result}`);
    return result;
}

// ==========================================
// 2. Check if a number is even or odd using modulus
// ==========================================
function checkEvenOrOdd(num) {
    console.log(`\n--- 2. Modulus Check for: ${num} ---`);
    if (num % 2 === 0) {
        console.log(`Result: ${num} is an EVEN number.`);
    } else {
        console.log(`Result: ${num} is an ODD number.`);
    }
}

// ==========================================
// 3. Validate a password using logical operators
// ==========================================
function validatePassword(password) {
    console.log(`\n--- 3. Password Validation ---`);
    
    // Rule criteria checks
    let hasMinLength = password.length >= 8;
    let hasSpecialChar = /[\!@#\$%\^&\*]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    
    // Combining requirements using logical AND (&&)
    let isValid = hasMinLength && hasSpecialChar && hasNumber;
    
    console.log(`Password: "${password}"`);
    console.log(`- At least 8 characters long? ${hasMinLength}`);
    console.log(`- Contains a special character (!@#$%^&*)? ${hasSpecialChar}`);
    console.log(`- Contains a number? ${hasNumber}`);
    console.log(`Final Verdict: Password is ${isValid ? "VALID" : "INVALID"}.`);
    
    return isValid;
}

// ==========================================
// 4. String manipulation using language methods
// ==========================================
function manipulateString(text) {
    console.log(`\n--- 4. String Manipulation ---`);
    console.log(`Original Text: "${text}"`);
    
    // Demonstrating various JavaScript string built-in tools
    let upper = text.toUpperCase();
    let lower = text.toLowerCase();
    let sliced = text.slice(0, 11); // Grabs first 11 characters
    let replaced = text.replace("JavaScript", "Coding");
    let characterCount = text.length;
    
    console.log(`To Uppercase:   "${upper}"`);
    console.log(`To Lowercase:   "${lower}"`);
    console.log(`Sliced String:  "${sliced}"`);
    console.log(`Replaced Text:  "${replaced}"`);
    console.log(`Character Count: ${characterCount} characters`);
}

// ==========================================
// Execution Engine (Testing all functions)
// ==========================================
simpleCalculator(12, 4, "+");
simpleCalculator(10, 0, "/");

checkEvenOrOdd(7);
checkEvenOrOdd(42);

validatePassword("Pass123!");
validatePassword("weak");

manipulateString("JavaScript is very powerful.");