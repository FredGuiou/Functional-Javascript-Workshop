//7 of 18 Basic : Recursion

//Task : 
// Implement Array#reduce using recursion.

// To test your reduction works correctly we will use your reduce implementation to execute our solution to the previous basic_reduce problem.
//i.e. your reduce function will be passed an array of words, and a function, and an initial value which will return an object containing the counts for each word found in the array. 
//You don't need to implement this functionality, it will be supplied to your reduce implementation.

// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.

//Arguments : 
//  arr: An Array to reduce over
//  fn: Function to use as the reduction step.
//Like regular Array#reduce, this function must be passed previousValue, currentValue, index and the array we're iterating over. 
//  init: Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume it will always be supplied).

//Conditions :
// Do not use any for/while loops.
// Do not use any Array methods like Array#map or Array#reduce.

//Example :
// Your reduce function should behave the same as a
// regular Array#reduce, but it will take the array
// to operate on as the first argument:

// reduce([1,2,3], function(prev, curr, index, arr) {
//     return prev + curr
// }, 0)

// => 6

//Hint : (None)


//My solution

function solution(arr, fn, initial) {
    return(function reduce (index, value){
    //Si l'index est supérieur à la longueur du tableau -1 (car cet index démarrre à 0) on ura parcouru l'ensemble
    //du tableau donc on retourne la valeur .
        if (index > arr.length -1){
            return value;
        }
        //Sinon on appelle reduce de façon récursive i.e. qu'elle s'appelle elle même.
        //On augmente l'index de 1 et on passe fn pour opérer sur value et l'index de l'array (arr[index]).
        return reduce(index + 1, fn(value, arr[index], arr));
        //LE premier appel de reduce s'opère avec la valeur dite "inital" dans l'énoncé et un index démarrant à 0.
    })(0, initial);
};

module.exports = solution