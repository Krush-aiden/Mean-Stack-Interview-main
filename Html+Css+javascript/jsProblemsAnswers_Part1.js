// =====================================================================
//  JAVASCRIPT CODING PROBLEMS — SOLUTIONS (PART 1 of 2)
//  Questions 1–30 : Strings, Arrays, Numbers, Objects
//  Ref: jsProblemsQuestions.txt for the full question list
// =====================================================================
//  Uncomment ONE problem block at a time and run with Node.js
// =====================================================================

// =====================================================================
//  SECTION 1 : STRING PROBLEMS (Q1 – Q8)
// =====================================================================

// =====================================================================
// Q1. PALINDROME CHECK
// =====================================================================

// --- Approach 1: For Loop ---
// Compare char at i with char at (length - 1 - i)

// function isPalindrome(str) {
//     str = str.toLowerCase();
//     for (let i = 0; i < Math.floor(str.length / 2); i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome('racecar'));  // true
// console.log(isPalindrome('hello'));    // false

// --- Approach 2: Built-in methods (split → reverse → join) ---

// function isPalindromeBuiltIn(str) {
//     const s = str.toLowerCase();
//     return s === s.split('').reverse().join('');
// }
// console.log(isPalindromeBuiltIn('madam'));  // true
// console.log(isPalindromeBuiltIn('abcd'));   // false

// Time: O(n) | Space: O(1) for loop, O(n) for built-in

// =====================================================================
// Q2. REVERSE A STRING (without reverse())
// =====================================================================

// --- Approach 1: For loop (decrementing) ---

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(reverseString('krushna'));  // anhsurk

// --- Approach 2: Using reduce ---

// function reverseReduce(str) {
//     return str.split('').reduce((acc, char) => char + acc, '');
// }
// console.log(reverseReduce('hello'));  // olleh

// Time: O(n) | Space: O(n)

// =====================================================================
// Q3. TITLE CASE — Capitalize first letter of each word
// =====================================================================

// --- Approach 1: Manual nested loop ---

// function toTitleCase(str) {
//     const words = str.toLowerCase().split(' ');
//     let result = '';
//     for (let i = 0; i < words.length; i++) {
//         result += words[i][0].toUpperCase();
//         for (let j = 1; j < words[i].length; j++) {
//             result += words[i][j];
//         }
//         if (i < words.length - 1) result += ' ';
//     }
//     return result;
// }
// console.log(toTitleCase('krUshna chanDRa mahaPatra'));
// // Krushna Chandra Mahapatra

// --- Approach 2: Using map (cleaner) ---

// function toTitleCaseMap(str) {
//     return str.toLowerCase().split(' ')
//         .map(word => word[0].toUpperCase() + word.slice(1))
//         .join(' ');
// }
// console.log(toTitleCaseMap('hello world foo'));  // Hello World Foo

// Time: O(n) | Space: O(n)

// =====================================================================
// Q4. CHARACTER OCCURRENCE COUNT
// =====================================================================

// function charCount(str) {
//     const cleaned = str.toLowerCase().replace(/\s/g, '');
//     const count = {};
//     for (const ch of cleaned) {
//         count[ch] = (count[ch] || 0) + 1;
//     }
//     return count;
// }

// // Find characters that appear more than once
// function duplicateChars(str) {
//     const count = charCount(str);
//     const result = {};
//     for (const [key, value] of Object.entries(count)) {
//         if (value > 1) result[key] = value;
//     }
//     return result;
// }

// console.log(charCount('hello World'));
// // { h:1, e:1, l:3, o:2, w:1, r:1, d:1 }
// console.log(duplicateChars('hello World'));
// // { l:3, o:2 }

// Time: O(n) | Space: O(k) where k = unique characters

// =====================================================================
// Q5. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
//     Sliding Window technique
// =====================================================================

// function lengthOfLongestSubstring(s) {
//     const seen = new Map();  // char → last index
//     let maxLen = 0;
//     let start = 0;           // left edge of window

//     for (let end = 0; end < s.length; end++) {
//         if (seen.has(s[end]) && seen.get(s[end]) >= start) {
//             // shrink window: move start past the duplicate
//             start = seen.get(s[end]) + 1;
//         }
//         seen.set(s[end], end);
//         maxLen = Math.max(maxLen, end - start + 1);
//     }
//     return maxLen;
// }

// console.log(lengthOfLongestSubstring('abcabcbb'));  // 3 ('abc')
// console.log(lengthOfLongestSubstring('bbbbb'));     // 1 ('b')
// console.log(lengthOfLongestSubstring('pwwkew'));    // 3 ('wke')

// Time: O(n) | Space: O(min(n, 26))

// =====================================================================
// Q6. ANAGRAM CHECK
//     Two strings are anagrams if they have the same characters
//     in the same frequency, just rearranged
// =====================================================================

// --- Approach 1: Sort and compare ---

// function isAnagramSort(a, b) {
//     if (a.length !== b.length) return false;
//     return a.toLowerCase().split('').sort().join('') ===
//            b.toLowerCase().split('').sort().join('');
// }
// console.log(isAnagramSort('listen', 'silent'));  // true
// console.log(isAnagramSort('hello', 'world'));    // false

// --- Approach 2: Frequency map (O(n) — better) ---

// function isAnagram(a, b) {
//     if (a.length !== b.length) return false;
//     const freq = {};
//     for (const ch of a.toLowerCase()) {
//         freq[ch] = (freq[ch] || 0) + 1;
//     }
//     for (const ch of b.toLowerCase()) {
//         if (!freq[ch]) return false;
//         freq[ch]--;
//     }
//     return true;
// }
// console.log(isAnagram('listen', 'silent'));  // true
// console.log(isAnagram('rat', 'car'));        // false

// Time: O(n) | Space: O(k)

// =====================================================================
// Q7. ALL PERMUTATIONS OF A STRING
//     Backtracking / Recursion
// =====================================================================

// function permutations(str) {
//     const result = [];

//     function backtrack(current, remaining) {
//         if (remaining.length === 0) {
//             result.push(current);
//             return;
//         }
//         for (let i = 0; i < remaining.length; i++) {
//             backtrack(
//                 current + remaining[i],
//                 remaining.slice(0, i) + remaining.slice(i + 1)
//             );
//         }
//     }

//     backtrack('', str);
//     return result;
// }

// console.log(permutations('abc'));
// // ['abc','acb','bac','bca','cab','cba']

// Time: O(n! * n) | Space: O(n!)

// =====================================================================
// Q8. STRING COMPRESSION
//     'aabcccccaaa' → 'a2b1c5a3'
// =====================================================================

// function compressString(str) {
//     let compressed = '';
//     let count = 1;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//         } else {
//             compressed += str[i] + count;
//             count = 1;
//         }
//     }

//     // Return original if compressed isn't shorter
//     return compressed.length < str.length ? compressed : str;
// }

// console.log(compressString('aabcccccaaa'));  // a2b1c5a3
// console.log(compressString('abc'));          // abc (not shorter)

// Time: O(n) | Space: O(n)

// =====================================================================
//  SECTION 2 : ARRAY PROBLEMS (Q9 – Q22)
// =====================================================================

// =====================================================================
// Q9. LARGEST & SMALLEST IN AN ARRAY
// =====================================================================

// --- Approach 1: For loop ---

// function findMinMax(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     return { max, min };
// }
// console.log(findMinMax([8, 2, 3, 1, 4, 6]));
// // { max: 8, min: 1 }

// --- Approach 2: Math.max / Math.min with spread ---

// const arr = [8, 2, 3, -1, 4, 6];
// console.log('Max:', Math.max(...arr));  // 8
// console.log('Min:', Math.min(...arr));  // -1

// Time: O(n) | Space: O(1)

// =====================================================================
// Q10. LARGEST ELEMENT IN A NESTED ARRAY
// =====================================================================

// --- Approach 1: Nested for loops ---

// function findLargestNested(arr) {
//     let max = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > max) max = arr[i][j];
//         }
//     }
//     return max;
// }

// const nested = [[8, 4, 10], [24, 2, 44], [5, 34]];
// console.log(findLargestNested(nested));  // 44

// --- Approach 2: flat() + Math.max ---

// console.log(Math.max(...nested.flat()));  // 44

// Time: O(n*m) | Space: O(1) loop, O(n*m) flat

// =====================================================================
// Q11. REMOVE DUPLICATES (Unique elements)
// =====================================================================

// --- Approach 1: For loop + includes ---

// function removeDuplicates(arr) {
//     const unique = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!unique.includes(arr[i])) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 5, 5, 6, 1, 7, 7]));
// // [1, 2, 3, 5, 6, 7]

// --- Approach 2: Using Set ---

// const unique = [...new Set([1, 2, 2, 3, 5, 5, 6, 1, 7, 7])];
// console.log(unique);  // [1, 2, 3, 5, 6, 7]

// Time: O(n²) includes, O(n) Set | Space: O(n)

// =====================================================================
// Q12. PURE UNIQUE — Elements appearing exactly once (count = 1)
//      [1,2,3,2,3,4,4,5,6,6,7] → [1,5,7]
// =====================================================================

// --- Approach 1: Nested loop ---

// function pureUnique(arr) {
//     return arr.filter((item, _, self) => {
//         return self.indexOf(item) === self.lastIndexOf(item);
//     });
// }
// console.log(pureUnique([1, 2, 3, 2, 3, 4, 4, 5, 6, 6, 7]));
// // [1, 5, 7]

// --- Approach 2: Frequency map (better) ---

// function pureUniqueMap(arr) {
//     const freq = {};
//     for (const num of arr) {
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     return arr.filter(num => freq[num] === 1);
// }
// console.log(pureUniqueMap([1, 2, 3, 2, 3, 4, 4, 5, 6, 6, 7]));
// // [1, 5, 7]

// Time: O(n) freq map | Space: O(n)

// =====================================================================
// Q13. SORT — Ascending & Descending
// =====================================================================

// --- Using sort() comparator ---
// a - b → ascending (negative = a first)
// b - a → descending (positive = b first)

// const nums = [3, 2, 1, 4, 5, 2, 1, 0];
// console.log('Asc:', [...nums].sort((a, b) => a - b));
// // [0, 1, 1, 2, 2, 3, 4, 5]
// console.log('Desc:', [...nums].sort((a, b) => b - a));
// // [5, 4, 3, 2, 2, 1, 1, 0]

// --- Bubble Sort (without built-in sort) ---

// function bubbleSort(arr) {
//     const result = [...arr];
//     for (let i = 0; i < result.length; i++) {
//         for (let j = 0; j < result.length - 1 - i; j++) {
//             if (result[j] > result[j + 1]) {
//                 [result[j], result[j + 1]] = [result[j + 1], result[j]];
//             }
//         }
//     }
//     return result;
// }
// console.log('Bubble:', bubbleSort([5, 3, 8, 1, 2]));
// // [1, 2, 3, 5, 8]

// --- Alphabetical ---
// const words = ['banana', 'apple', 'cherry'];
// console.log('Alpha asc:', [...words].sort());
// console.log('Alpha desc:', [...words].sort().reverse());

// Time: O(n log n) sort, O(n²) bubble | Space: O(n)

// =====================================================================
// Q14. SECOND SMALLEST & SECOND LARGEST
// =====================================================================

// --- Approach 1: Sort ---

// const arr = [3, 2, 1, 4, 5, 2, 1, 0];
// const sorted = [...new Set(arr)].sort((a, b) => a - b);
// console.log('2nd smallest:', sorted[1]);                 // 1
// console.log('2nd largest:', sorted[sorted.length - 2]);  // 4

// --- Approach 2: Single pass (no sort, O(n)) ---

// function secondSmallestLargest(arr) {
//     let min1 = Infinity, min2 = Infinity;
//     let max1 = -Infinity, max2 = -Infinity;

//     for (const num of arr) {
//         if (num < min1) { min2 = min1; min1 = num; }
//         else if (num < min2 && num !== min1) min2 = num;

//         if (num > max1) { max2 = max1; max1 = num; }
//         else if (num > max2 && num !== max1) max2 = num;
//     }
//     return { secondSmallest: min2, secondLargest: max2 };
// }
// console.log(secondSmallestLargest([3, 2, 1, 4, 5]));
// // { secondSmallest: 2, secondLargest: 4 }

// Time: O(n) | Space: O(1)

// =====================================================================
// Q15. TWO SUM
//      Find two numbers that add up to target, return their indices
// =====================================================================

// --- Approach 1: Brute force O(n²) ---

// function twoSumBrute(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) return [i, j];
//         }
//     }
//     return [];
// }
// console.log(twoSumBrute([2, 7, 11, 15], 9));  // [0, 1]

// --- Approach 2: Hash map O(n) — Interview Standard ---

// function twoSum(nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9));   // [0, 1]
// console.log(twoSum([3, 2, 4], 6));         // [1, 2]

// Time: O(n) | Space: O(n)

// =====================================================================
// Q16. INTERSECTION & UNION OF TWO ARRAYS
// =====================================================================

// function intersectionAndUnion(arr1, arr2) {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);

//     const intersection = [...set1].filter(x => set2.has(x));
//     const union = [...new Set([...arr1, ...arr2])];

//     return { intersection, union };
// }

// console.log(intersectionAndUnion([1, 2, 3, 4], [3, 4, 5, 6]));
// // intersection: [3, 4], union: [1, 2, 3, 4, 5, 6]

// Time: O(n + m) | Space: O(n + m)

// =====================================================================
// Q17. FLATTEN A DEEPLY NESTED ARRAY (without Array.flat)
// =====================================================================

// --- Approach 1: Recursion ---

// function flattenDeep(arr) {
//     const result = [];
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             result.push(...flattenDeep(item));
//         } else {
//             result.push(item);
//         }
//     }
//     return result;
// }
// console.log(flattenDeep([1, [2, [3, [4]], 5]]));
// // [1, 2, 3, 4, 5]

// --- Approach 2: Using reduce + recursion ---

// function flattenReduce(arr) {
//     return arr.reduce((acc, item) => {
//         return acc.concat(Array.isArray(item) ? flattenReduce(item) : item);
//     }, []);
// }
// console.log(flattenReduce([1, [2, [3, [4]], 5]]));
// // [1, 2, 3, 4, 5]

// --- Approach 3: Iterative (using stack) ---

// function flattenIterative(arr) {
//     const stack = [...arr];
//     const result = [];
//     while (stack.length) {
//         const item = stack.pop();
//         if (Array.isArray(item)) {
//             stack.push(...item);
//         } else {
//             result.unshift(item);
//         }
//     }
//     return result;
// }
// console.log(flattenIterative([1, [2, [3, [4]], 5]]));
// // [1, 2, 3, 4, 5]

// Time: O(n) | Space: O(n)

// =====================================================================
// Q18. IMPLEMENT Array.flat WITH CONFIGURABLE DEPTH
// =====================================================================

// function flatWithDepth(arr, depth = 1) {
//     if (depth <= 0) return [...arr];
//     return arr.reduce((acc, item) => {
//         if (Array.isArray(item)) {
//             return acc.concat(flatWithDepth(item, depth - 1));
//         }
//         return acc.concat(item);
//     }, []);
// }

// console.log(flatWithDepth([1, [2, [3, [4]]]], 1));  // [1, 2, [3, [4]]]
// console.log(flatWithDepth([1, [2, [3, [4]]]], 2));  // [1, 2, 3, [4]]
// console.log(flatWithDepth([1, [2, [3, [4]]]], Infinity));  // [1, 2, 3, 4]

// Time: O(n * d) | Space: O(n)

// =====================================================================
// Q19. GROUP ARRAY OF OBJECTS BY A PROPERTY
// =====================================================================

// function groupBy(arr, key) {
//     return arr.reduce((groups, item) => {
//         const groupKey = item[key];
//         if (!groups[groupKey]) {
//             groups[groupKey] = [];
//         }
//         groups[groupKey].push(item);
//         return groups;
//     }, {});
// }

// const employees = [
//     { name: 'Alice', dept: 'IT' },
//     { name: 'Bob', dept: 'HR' },
//     { name: 'Charlie', dept: 'IT' },
//     { name: 'Diana', dept: 'HR' },
//     { name: 'Eve', dept: 'Finance' },
// ];

// console.log(groupBy(employees, 'dept'));
// // {
// //   IT: [{ name: 'Alice', dept: 'IT' }, { name: 'Charlie', dept: 'IT' }],
// //   HR: [{ name: 'Bob', dept: 'HR' }, { name: 'Diana', dept: 'HR' }],
// //   Finance: [{ name: 'Eve', dept: 'Finance' }]
// // }

// Note: JS now has Object.groupBy() in 2024+ but interviewers
// want you to implement it manually.

// Time: O(n) | Space: O(n)

// =====================================================================
// Q20. ROTATE AN ARRAY BY K POSITIONS
// =====================================================================

// function rotateArray(arr, k, direction = 'right') {
//     const n = arr.length;
//     k = k % n;  // handle k > array length
//     if (direction === 'right') {
//         return [...arr.slice(n - k), ...arr.slice(0, n - k)];
//     } else {
//         return [...arr.slice(k), ...arr.slice(0, k)];
//     }
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2, 'right'));  // [4, 5, 1, 2, 3]
// console.log(rotateArray([1, 2, 3, 4, 5], 2, 'left'));   // [3, 4, 5, 1, 2]

// --- In-place rotation using reverse (interview favorite) ---

// function rotateInPlace(arr, k) {
//     k = k % arr.length;
//     function reverse(start, end) {
//         while (start < end) {
//             [arr[start], arr[end]] = [arr[end], arr[start]];
//             start++;
//             end--;
//         }
//     }
//     reverse(0, arr.length - 1);       // reverse entire array
//     reverse(0, k - 1);               // reverse first k elements
//     reverse(k, arr.length - 1);      // reverse remaining
//     return arr;
// }
// console.log(rotateInPlace([1, 2, 3, 4, 5], 2));  // [4, 5, 1, 2, 3]

// Time: O(n) | Space: O(1) in-place, O(n) slice

// =====================================================================
// Q21. MAXIMUM SUM SUBARRAY — Kadane's Algorithm
// =====================================================================

// function maxSubarraySum(arr) {
//     let maxSoFar = arr[0];
//     let maxEndingHere = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         // Either extend the previous subarray or start fresh
//         maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
//         maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }
//     return maxSoFar;
// }

// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // 6
// // subarray: [4, -1, 2, 1]

// --- Bonus: Return the actual subarray ---

// function maxSubarray(arr) {
//     let maxSoFar = arr[0], maxEndingHere = arr[0];
//     let start = 0, end = 0, tempStart = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxEndingHere + arr[i]) {
//             maxEndingHere = arr[i];
//             tempStart = i;
//         } else {
//             maxEndingHere += arr[i];
//         }
//         if (maxEndingHere > maxSoFar) {
//             maxSoFar = maxEndingHere;
//             start = tempStart;
//             end = i;
//         }
//     }
//     return { sum: maxSoFar, subarray: arr.slice(start, end + 1) };
// }
// console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// // { sum: 6, subarray: [4, -1, 2, 1] }

// Time: O(n) | Space: O(1)

// =====================================================================
// Q22. CHUNK AN ARRAY
//      [1,2,3,4,5], size=2 → [[1,2],[3,4],[5]]
// =====================================================================

// function chunkArray(arr, size) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5], 2));    // [[1,2],[3,4],[5]]
// console.log(chunkArray([1, 2, 3, 4, 5, 6], 3)); // [[1,2,3],[4,5,6]]

// Time: O(n) | Space: O(n)

// =====================================================================
//  SECTION 3 : NUMBER / MATH PROBLEMS (Q23 – Q29)
// =====================================================================

// =====================================================================
// Q23. FACTORIAL
// =====================================================================

// --- Approach 1: Iterative ---

// function factorialIterative(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorialIterative(5));  // 120

// --- Approach 2: Recursive ---

// function factorialRecursive(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorialRecursive(n - 1);
// }
// console.log(factorialRecursive(5));  // 120

// --- Approach 3: Tail-call optimized ---

// function factorialTail(n, acc = 1) {
//     if (n <= 1) return acc;
//     return factorialTail(n - 1, n * acc);
// }
// console.log(factorialTail(6));  // 720

// Time: O(n) | Space: O(1) iterative, O(n) recursive

// =====================================================================
// Q24. PRIME NUMBER CHECK
// =====================================================================

// --- Approach 1: Loop up to n (brute force) ---

// function isPrimeBasic(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrimeBasic(151));  // true
// console.log(isPrimeBasic(6));    // false

// --- Approach 2: Optimized — loop up to sqrt(n) ---
// If n has a factor > sqrt(n), the other factor must be < sqrt(n)
// So we only need to check up to sqrt(n)

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;
//     if (n % 2 === 0 || n % 3 === 0) return false;
//     for (let i = 5; i <= Math.sqrt(n); i += 2) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(151));  // true
// console.log(isPrime(63));   // false (63 = 7 × 9)

// Time: O(√n) optimized | Space: O(1)

// =====================================================================
// Q25. FIZZBUZZ
// =====================================================================

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
//         else if (i % 3 === 0) console.log('Fizz');
//         else if (i % 5 === 0) console.log('Buzz');
//         else console.log(i);
//     }
// }
// fizzBuzz(15);
// // 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

// --- Variation: Return as array (common follow-up) ---

// function fizzBuzzArray(n) {
//     return Array.from({ length: n }, (_, i) => {
//         const num = i + 1;
//         if (num % 15 === 0) return 'FizzBuzz';
//         if (num % 3 === 0) return 'Fizz';
//         if (num % 5 === 0) return 'Buzz';
//         return num;
//     });
// }
// console.log(fizzBuzzArray(15));

// Time: O(n) | Space: O(1) or O(n) for array version

// =====================================================================
// Q26. IS POWER OF TWO
// =====================================================================

// --- Approach 1: Loop ---

// function isPowerOfTwoLoop(n) {
//     if (n <= 0) return false;
//     while (n > 1) {
//         if (n % 2 !== 0) return false;
//         n /= 2;
//     }
//     return true;
// }
// console.log(isPowerOfTwoLoop(16));  // true
// console.log(isPowerOfTwoLoop(18));  // false

// --- Approach 2: Bitwise (O(1) — interview favorite) ---
// Powers of 2 in binary have exactly ONE bit set: 1, 10, 100, 1000...
// n & (n-1) flips the lowest set bit. If result is 0 → power of 2

// function isPowerOfTwo(n) {
//     return n > 0 && (n & (n - 1)) === 0;
// }
// console.log(isPowerOfTwo(16));   // true  (10000 & 01111 = 0)
// console.log(isPowerOfTwo(18));   // false (10010 & 10001 = 10000)
// console.log(isPowerOfTwo(1));    // true  (2^0)

// Time: O(1) bitwise | Space: O(1)

// =====================================================================
// Q27. ROMAN NUMERALS ↔ INTEGERS
// =====================================================================

// --- Roman to Integer ---

// function romanToInt(s) {
//     const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//     let result = 0;
//     for (let i = 0; i < s.length; i++) {
//         // If current value < next value, subtract (e.g., IV = 4)
//         if (map[s[i]] < map[s[i + 1]]) {
//             result -= map[s[i]];
//         } else {
//             result += map[s[i]];
//         }
//     }
//     return result;
// }
// console.log(romanToInt('XIV'));     // 14
// console.log(romanToInt('MCMXC'));   // 1990

// --- Integer to Roman ---

// function intToRoman(num) {
//     const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//     const symbols = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
//     let result = '';
//     for (let i = 0; i < values.length; i++) {
//         while (num >= values[i]) {
//             result += symbols[i];
//             num -= values[i];
//         }
//     }
//     return result;
// }
// console.log(intToRoman(14));    // XIV
// console.log(intToRoman(1990));  // MCMXC

// Time: O(n) | Space: O(1)

// =====================================================================
// Q28. FIBONACCI — Generator Function
// =====================================================================

// function* fibonacci(n) {
//     let a = 0, b = 1;
//     for (let i = 0; i < n; i++) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }

// // Usage: Lazy iteration — generates values on demand
// console.log([...fibonacci(10)]);
// // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// // You can also iterate with for...of:
// // for (const num of fibonacci(10)) {
// //     console.log(num);
// // }

// --- Non-generator version (simple array) ---

// function fibArray(n) {
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib.slice(0, n);
// }
// console.log(fibArray(10));
// // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Time: O(n) | Space: O(1) generator, O(n) array

// =====================================================================
// Q29. STAR PYRAMID PATTERN
// =====================================================================

// function starPyramid(n) {
//     for (let i = 0; i < n; i++) {
//         const spaces = ' '.repeat(n - 1 - i);
//         const stars = '*'.repeat(2 * i + 1);
//         console.log(spaces + stars);
//     }
// }
// starPyramid(5);
//     *
//    ***
//   *****
//  *******
// *********

// --- Inverted pyramid ---

// function invertedPyramid(n) {
//     for (let i = n - 1; i >= 0; i--) {
//         const spaces = ' '.repeat(n - 1 - i);
//         const stars = '*'.repeat(2 * i + 1);
//         console.log(spaces + stars);
//     }
// }
// invertedPyramid(5);
// *********
//  *******
//   *****
//    ***
//     *

// --- Diamond ---

// function diamond(n) {
//     starPyramid(n);
//     invertedPyramid(n - 1);  // skip the middle row
// }
// diamond(4);

// =====================================================================
//  SECTION 4 : OBJECT / DATA STRUCTURE PROBLEMS (Q30)
//  (Q31-35 continue in Part 2)
// =====================================================================

// =====================================================================
// Q30. DEEP CLONE AN OBJECT
//      Handle nested objects, arrays, Date, null
// =====================================================================

// --- Approach 1: Manual recursion (interview answer) ---

// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') return obj;
//     if (obj instanceof Date) return new Date(obj.getTime());
//     if (Array.isArray(obj)) return obj.map(item => deepClone(item));

//     const cloned = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             cloned[key] = deepClone(obj[key]);
//         }
//     }
//     return cloned;
// }

// const original = {
//     name: 'Krush',
//     address: { city: 'Mumbai', zip: 400001 },
//     hobbies: ['coding', 'music'],
//     joined: new Date('2022-01-01'),
//     meta: null,
// };

// const cloned = deepClone(original);
// cloned.address.city = 'Delhi';
// cloned.hobbies.push('gaming');

// console.log(original.address.city);  // Mumbai (unchanged)
// console.log(original.hobbies);       // ['coding', 'music'] (unchanged)
// console.log(cloned.address.city);    // Delhi
// console.log(cloned.hobbies);         // ['coding', 'music', 'gaming']

// --- Approach 2: structuredClone (modern JS — 2022+) ---

// const cloned2 = structuredClone(original);
// console.log(cloned2);

// Note: structuredClone works in Node 17+ and all modern browsers.
// It handles Date, Map, Set, ArrayBuffer etc. but NOT functions.

// --- Approach 3: JSON trick (quick & dirty — loses Date, functions) ---

// const cloned3 = JSON.parse(JSON.stringify(original));
// // Warning: Date becomes string, functions/undefined are lost

// Time: O(n) | Space: O(n) where n = total properties
