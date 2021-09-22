// ❗ Use console.log() To Check Answers

// ✅ Defining Functions

    // define a function 'printTemp' using function declaration that returns 'Today's temperature is 90 degrees fahrenheit'

        // function printTemp(){
        //     return "Today's temperature is 90 degrees fahrenheit";
        // }
        // 💡 Check Answer: 
        // console.log(printTemp());

    // define a function 'printTemp' using function expression that returns 'Today's temperature is 90 degrees fahrenheit'

        // const printTemp = function(){
        //     return "Today's temperature is 90 degrees fahrenheit";
        // }
        // 💡 Check Answer: 
        // console.log(printTemp());

    // define a function 'printTemp' using arrow syntax that returns 'Today's temperature is 90 degrees fahrenheit'
        // const printTemp = () => {
        //     return "Today's temperature is 90 degrees fahrenheit";
        // }
        // 💡 Check Answer: 
        // console.log(printTemp());

// ✅ Declaring vs. Invoking Functions

    // function printTemp(){
    //     return "Some temp";
    // }

    // function someFunction(printTemp){
    //     printTemp();
    // }

    // print a reference to the 'printTemp' function

    // console.log(printTemp);

    // someFunction(printTemp()); // same as someFunction("Some temp") -> error

    // someFunction(printTemp);

    // call function and evaluate logic


// ✅ Parameters vs Arguments

    // using the printTemp function again, let's define a parameter 'temperature'

    // function prinTemp(temp){
    //     return "some temp";
    // }

    // how can we use the paramater to make our code more dynamic?

    // function printTemp(temp){
    //     return `The temperature is: ${temp}`;
    // }

    // now invoke the function and pass in an argument

    // console.log(printTemp(75));

// ✅ First Class (Higher Order) Functions

    // functions in JS are First Class Functions
    // Higher Order Functions accept functions as parameters

    // store a function inside of a variable



    // pass a function as an argument



    // functions are objects and can have properties


// ✅ Scopes

    // Global Scope

    // Function Scope


// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Defining, Declaring, and Invoking Functions 

    // ❗ Define a function that takes two numbers as arguments and returns their sum.

        // Example: addNumbers(5, 5) ➞ 10

        // ✨ BONUS: Try providing a default value for one of your arguments.
        // function addNumbers(num1 = 5, num2 = 5){
        //     return num1 + num2;
        // }

    // ❗ Define a function that takes an integer "minutes" and converts it to seconds.

        // Example: convert(6) ➞ 360

        // function minToSec(minutes){
        //     return minutes * 60;
        // }

    // ❗ Define a function that takes any number between 1 and 1000. Sum all the numbers 
    // from 1 to the number passed to the function. For instance, if the input is 5 then 
    // your function should return 15 because 1 + 2 + 3 + 4 + 5 = 15.

        // Example: sumNumbers(5) ➞ 15

        // function sumNumbers(num){
        //     // RECURSION
        //     // if (num == 0){
        //     //     return num;
        //     // }
        //     // return num + sumNumbers(num-1);

        //     // FOR LOOP
        //     // let sum = 0;
        //     // for (let i = 1; i <= num; i++){
        //     //     sum += i;
        //     // }
        //     // return sum;

        //     // ARITHMETIC
        //     return (n + 1) * n / 2;
        // }
        
        // console.log(sumNumbers(5));

    // 🚨 Be sure to comment out any code above before proceeding to the next activity.


// 🚧 Break Out Activity 2: Creating / Implementing First Class (Higher Order) Functions

    // ❗ Define a function, compareFunctions(), that will be passed two parameterless functions, 
    // first and second. compareFunctions() should call each function and return a string indicating 
    // which function returned the larger number.

        // If first() returns the larger number, return the string "First Function is Higher!". 
        // If second() returns the larger number, return the string "Second Function is Higher!". 
        // If the functions return the same number, return the string "Draw!".

        // Example: compareFunctions(() => 10, () => 1) ➞ "First Function is Higher!"
        // Example: compareFunctions(() => 1, () => 10) ➞ "Second Function is Higher!"
        // Example: compareFunctions(() => 10, () => 10) ➞ "Draw!"

        // const myFunction = () => {
        //     return 1;
        // }

        // function compareFunctions(first, second){
        //     if (first() > second()){
        //         return "First Function is Higher!";
        //     } else if (first() < second()){
        //         return "Second Function is Higher!";
        //     } else{
        //         return "Draw!";
        //     }
        // }

        // console.log(compareFunctions(() => 10, () => 1));
        // console.log(compareFunctions(() => 1, () => 10));
        // console.log(compareFunctions(() => 10, () => 10));

    // 🚨 Be sure to comment out any code above before proceeding.


// 🚧 Break Out Activity 3: Advanced Functions

    // ❗ Define a function that reverses all the words in a sentence beginning with a particular letter.

        // 💡 Reverse the words themselves, not the entire sentence.

        // 💡 All characters in any sentence should remain in lower case.

        // Example: reverseWords("sally sells seashells by the sea shore", "s") ➞ "yllas slles sllehsaes by the aes erohs"

        function reverseWords(oldSentence, letter) {
        
            // break apart "sentence" along each single space character into an array of originalWords
            let oldWords = oldSentence.split(' ');
    
            // "map" over each word and store returned values in an array of newWords
            let newWords = oldWords.map(word => {
                
                // if the first letter of "word" matches "letter"...
                if (word[0] === letter) {
    
                    // break apart "word" along each empty space character into an array of oldCharacters
                    let oldCharacters = word.split('');
    
                    // reverse() the ordering of elements in oldCharacters 
                    oldCharacters.reverse();
                    
                    // and merge oldCharacters back into a string (reversedWord) using join()
                    let reversedWord = oldCharacters.join('');
    
                    // before returning reversedWord and adding it to newWords
                    return reversedWord
                
                // in all other cases...
                } else {
    
                    // ... return word / add it to newWords anyway
                    return word;
                }
            });
    
            // merge newWords back into a string (newSentence)
            let newSentence = newWords.join(' ');
    
            // return a newSentence with matching words reversed
            return newSentence;
        }
    
        console.log(reverseWords("sally sells seashells by the sea shore", "s"));

        // function reverseWords(sentence, letter){
        //     let modifiedSentence = "";
        //     for(let i = 0; i < sentence.length(); i++){
                
        //     }
        // }
        // console.log(reverseWords("sally sells seashells by the sea shore", "s"));