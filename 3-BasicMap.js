//3 of 18 Basic : Map

//Task : Convert the following code from a for-loop to Array#map:

//    function doubleAll(numbers) {
//        var result = []
//        for (var i = 0; i < numbers.length; i++) {
//       result.push(numbers[i] * 2)
//     }
//     return result
//   }
//   module.exports = doubleAll

//Arguments : 
//numbers is an array of 0 to 20 integers between 0 ans 9.

//Conditions :
// Your solution should use Array.prototype.map()
// Do not use any for/while loops or Array.prototype.forEach.

//My solution

function doubleAll(numbers) {

    let result = [];
    result = numbers.map((num) => (num * 2)); 
    return result;

};

module.exports = doubleAll