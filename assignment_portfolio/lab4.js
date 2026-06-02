
// ==========================================
// 1. Determine if a number is positive, negative, or zero
// ==========================================
function checkNumberSign(num) {
    console.log(`--- 1. Checking Number: ${num} ---`);
    if (num > 0) {
        console.log(`Result: ${num} is POSITIVE.`);
    } else if (num < 0) {
        console.log(`Result: ${num} is NEGATIVE.`);
    } else {
        console.log(`Result: The number is ZERO.`);
    }
}

// ==========================================
// 2. Print a multiplication table using nested loops
// ==========================================
function printMultiplicationTable(size) {
    console.log(`\n--- 2. Multiplication Table (${size}x${size}) ---`);
    for (let i = 1; i <= size; i++) {
        let row = "";
        for (let j = 1; j <= size; j++) {
            // padStart makes the numbers line up cleanly in columns
            let product = (i * j).toString().padStart(4, " ");
            row += product;
        }
        console.log(row);
    }
}

// ==========================================
// 3. Check if a number is prime
// ==========================================
function isPrime(num) {
    console.log(`\n--- 3. Prime Number Check for: ${num} ---`);
    
    if (num <= 1) {
        console.log(`Result: ${num} is NOT a prime number.`);
        return;
    }
    
    let primeStatus = true;
    
    // Check for factors up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primeStatus = false;
            break; // Factor found, stop checking
        }
    }
    
    if (primeStatus) {
        console.log(`Result: ${num} is a PRIME number.`);
    } else {
        console.log(`Result: ${num} is a COMPOSITE number (not prime).`);
    }
}

// ==========================================
// 4. Create a menu system using switch/if statements
// ==========================================
function runMenuSystem(choice, dataValue) {
    console.log(`\n--- 4. Menu System (Selection: Option ${choice}) ---`);
    console.log("1. Check Number Sign");
    console.log("2. Generate 5x5 Grid");
    console.log("3. Test Prime Number");
    console.log("4. Exit System");
    
    switch (choice) {
        case 1:
            console.log("[Menu Action] Running Item 1...");
            checkNumberSign(dataValue ?? -7);
            break;
        case 2:
            console.log("[Menu Action] Running Item 2...");
            printMultiplicationTable(5);
            break;
        case 3:
            console.log("[Menu Action] Running Item 3...");
            isPrime(dataValue ?? 17);
            break;
        case 4:
            console.log("[Menu Action] Exiting system. Goodbye!");
            break;
        default:
            console.log("[Menu Warning] Invalid menu choice selection.");
    }
}

// ==========================================
// Execution Engine (Runs the functions above)
// ==========================================
checkNumberSign(15);
printMultiplicationTable(5);
isPrime(29);

// Test different paths of your menu switch system
runMenuSystem(1, -25);
runMenuSystem(2);
runMenuSystem(3, 4);
runMenuSystem(4);