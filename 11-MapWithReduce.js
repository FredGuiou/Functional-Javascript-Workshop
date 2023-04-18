// # Défi

// Utilisez Array#reduce() pour implémenter une version simple de Array#map().

// ## Résultat attendu

// Une fonction map() applique une fonction quelconque à chaque élément d’un tableau, et renvoie le tableau des résultats obtenus.

//     var nums = [1,2,3,4,5]

//     `map` est la fonction que vous exportez
//     var output = map(nums, function double(item) {
//       return item * 2
//     })

//     console.log(output) // => [2,4,6,8,10]

// ## Arguments

//    `input` : un tableau de données quelconques, de types variés.
//    `operation` : une fonction quelconque, à appliquer aux éléments de `input`.

// ## Ressources

//    https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
//    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce

// ## Base de travail

    module.exports = function arrayMap(arr, fn) {
        //On utilise reduce pour parcourir le tableau 
        return arr.reduce(
            (acc, item)=> {
                acc.push(fn(item));
                return acc;
            }, []
        )
    }