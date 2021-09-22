// ❗ Use console.log() To Check Answers

// ✅ Creating / Accessing Arrays

    // what are arrays?

    // define an array with several values
    // what is the technical term for these individual items?

    // count items in an array

    // access elements in an array

// ✅ Modifying Arrays

    // adding elements to an array

        // add element to end of array

        // add element to beginning of array

    // removing elements from an array
        
        // remove last element and return that element
    
        // remove first element and return that element
    
        // return the element at the index provided in a new array
    
        // return all elements where index >= 0 and index < 2
    
        // starting at index 1, return 2 elements
    
        // add elements where others are removed

// ✅ Iterating Through Arrays

    // looping over arrays
        
        // for loop
        
        // do while loop
        
        // for...of loop
        
        // while loop

// ✅ Array Iteration Methods

        // .forEach()
        
        // .map()
        
        // .filter()
        
        // .find()

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Creating / Accessing / Modifying Arrays

    // ✨ BONUS: Try using different ways to define your functions (i.e., const, arrow syntax, etc.) 

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that accepts an array of numbers and returns the first element

        // Example: getFirstElement([10, 9, 8]) => 10
        // Example: getFirstElement([1, 2, 3]) => 1
        // Example: getFirstElement([-10, 0, 10]) => -10

        function getFirstElement(array){
            return array.shift();
        }

        // ✅ Check Answer: 
        console.log(getFirstElement([10, 9, 8]));
        console.log(getFirstElement([1, 2, 3]));
        console.log(getFirstElement([-10, 0, 10]));


    // 2️⃣ Create a function that returns an array of unique strings sorted by length in ascending order.

        // Example: sortWords(["i'm", "louis", "hi"]) => ["hi", "i'm", "louis"]
        // Example: sortWords(["yellow", "red", "blue"]) => ["red", "blue", "yellow"]
        
        // ❗ If the provided array is empty, return an empty array

        // Example: sortWords([]) => []
        function sortWords(stringArray){
            const newArray = stringArray.sort(function(a, b){
                return a.length - b.length;
            })
            return newArray;
        }

        // ✅ Check Answer: 
        console.log(sortWords(["i'm", "louis", "hi"]));
        console.log(sortWords(["yellow", "red", "blue"]));

// 🚧 Break Out Activity 2: Iterating Through Arrays

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that sorts and removes all duplicate elements from an array of numbers
    // before returning the new array.

        // Example: removeDuplicates([1, 1, 2, 2, 3, 3]) => [1, 2, 3]
        // Example: removeDuplicates([1, 1, 1, 1]) => [1]
        // Example: removeDuplicates([3, 3, 3, 2, 1]) => [1, 2, 3]

        // ❗ Aim to use loops, ".map()" or other Array methods that we have covered

        function removeDuplicates(numArray){
            let newArray = [];
            for (let i = 0; i < numArray.length; i++) {
                if (newArray.indexOf(numArray[i]) < 0){
                    newArray.push(numArray[i]);
                }
            }
            return newArray;
        }


        // ✅ Check Answer: 
        console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));

// 🚧 Break Out Activity 3: Advanced Array Challenge

    // 🚨 Comment out any conflicting code above before proceeding.

    // 1️⃣ Create a function that returns the total sum of cubes for a given array of numbers.

        // Example: sumCubes([1, 2, 3]) => 99
            // 1^3 + 2^3 + 3^3 = 1 + 8 + 27 => 36
        // Example: sumCubes([1]) => 1
        // Example: sumCubes([3]) => 27

        // ❗ If the provided array is empty, return 0
        
        // Example: sumCubes([]) => 0

        // ✅ Check Answer: 
        // console.log(sumCubes());