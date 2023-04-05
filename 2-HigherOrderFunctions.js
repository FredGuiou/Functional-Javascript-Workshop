//2 of 18 Higher Order Functions

//Task : Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

//Hints : Don't overthink it, the code should be rather simple. It's ok to use a loop in your implementation, bonus points if you use recursion instead.
//You may notice some output. That is coming from the function we passed you. You do not need to console.log anything.

//My solution

function repeat(operation, num) {
    for(let i = 0; i < num; i++){
    operation(num);
    };
};

module.exports = repeat