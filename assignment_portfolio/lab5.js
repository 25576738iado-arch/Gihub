
// ==========================================
// 1. Calculate factorial using recursion
// ==========================================
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * calculateFactorial(n - 1); // Recursive call
}

// ==========================================
// 2. Write a function that reverses a string or array
// ==========================================
function reverseData(input) {
    if (Array.isArray(input)) {
        return [...input].reverse(); // Returns a reversed copy of the array
    }
    return input.split("").reverse().join(""); // Splits string, reverses, and rejoins
}

// ==========================================
// 3. Check if a word is a palindrome
// ==========================================
function isPalindrome(word) {
    // Convert to lowercase and remove spaces/punctuation for a clean check
    let cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedWord = reverseData(cleanWord);
    
    let status = cleanWord === reversedWord;
    console.log(`Is "${word}" a palindrome? ${status ? "YES" : "NO"}`);
    return status;
}

// ==========================================
// 4. Implement linear search, bubble sort, and binary search
// ==========================================

// Linear Search (Looks through everything item by item)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i; // Return index if found
    }
    return -1; // Return -1 if not found
}

// Bubble Sort (Swaps adjacent items until ordered)
function bubbleSort(arr) {
    let sortedArr = [...arr]; // Copy original array
    let len = sortedArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                // Swap items
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
}

// Binary Search (Splits sorted arrays in half repeatedly)
function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (sortedArr[mid] === target) {
            return mid; // Found it
        } else if (sortedArr[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }
    return -1; // Not found
}

// ==========================================
// 5. Write a function that calculates the Fibonacci sequence
// ==========================================
function generateFibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    
    let sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// ==========================================
// Execution Engine (Testing all functions)
// ==========================================
console.log("--- 1. Recursion ---");
console.log(`Factorial of 5: ${calculateFactorial(5)}`);

console.log("\n--- 2. Reversing Data ---");
console.log(`Reversed String: ${reverseData("hello")}`);
console.log(`Reversed Array: ${reverseData([1, 2, 3, 4, 5])}`);

console.log("\n--- 3. Palindrome Check ---");
isPalindrome("racecar");
isPalindrome("github");

console.log("\n--- 4. Search and Sort Algorithms ---");
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
console.log(`Original Array: ${unsortedNumbers}`);

let sortedNumbers = bubbleSort(unsortedNumbers);
console.log(`Bubble Sorted Array: ${sortedNumbers}`);

console.log(`Linear Search for 22 in original: Index ${linearSearch(unsortedNumbers, 22)}`);
console.log(`Binary Search for 22 in sorted: Index ${binarySearch(sortedNumbers, 22)}`);

console.log("\n--- 5. Fibonacci Sequence ---");
console.log(`First 10 Fibonacci numbers: ${generateFibonacci(10)}`);