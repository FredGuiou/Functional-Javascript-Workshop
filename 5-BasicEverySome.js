//5 of 18 Basic : Every Some

//Task : 

// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

// You only need to check that the ids match.

//Arguments : 

// goodUsers: a list of valid users

// Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.

// Example :


// var goodUsers = [
//     { id: 1 },
//     { id: 2 },
//     { id: 3 }
//   ]

//  `checkUsersValid` is the function you'll define
//   var testAllValid = checkUsersValid(goodUsers)

//   testAllValid([
//     { id: 2 },
//     { id: 1 }
//   ])
//   => true

//   testAllValid([
//     { id: 2 },
//     { id: 4 },
//     { id: 1 }
//   ])
//   => false


//Conditions :

// Do not use any for/while loops or Array#forEach.

//Hint : (None)



//My solution

function checkUsersValid(goodUsers) {

    return function allUsersValid(submittedUsers) {

        //The .every() function tests if all elements of the submittedUsers passed the tests of the .some() function. True or false boolean.
        return submittedUsers.every((submittedUser) => {

            //The .some() function return a true or false boolean if some goodUser.id of goodUsers is === to some submittedUser.id of submittedUsers
            return goodUsers.some((goodUser) => {
                return goodUser.id === submittedUser.id;
            });
        });
    };
}

module.exports = checkUsersValid