//6 of 18 Basic : Reduce

//Task : 

// Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).


//Arguments : 

// inputWords: An array of random Strings.


// Example :

//     var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

//     console.log(countWords(inputWords))

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }

//Conditions :
// Do not use any for/while loops or Array#forEach.

//Hint : (None)


//My solution

function countWords(inputWords) {
    //We expect an object on result (check the example). So I initialize one empty.
    let counter = {};

    //I apply the .reduce() method on the parameter inputWords
    //This makes it possible to launch a callback function 
    //which reduces the list to one occurrence of each
    //and adds a counter which increments 1 with each repetition of the word
    
    return inputWords.reduce(
        (count, word) => {count[word] = (count[word]||0)+1;
            return count;
        }, counter
    );

};

module.exports = countWords