
// # Défi

// Ajoutez des capacités à une méthode précise sur un objet, tout en préservant son comportement d’origine : créez un espion qui garde la trace du nombre de fois que la fonction a été appelée.

// ## Exemple

//     var spy = Spy(console, 'error')

//     console.error('appel de console.error')
//     console.error('appel de console.error')
//     console.error('appel de console.error')

//     console.log(spy.count) // 3

// ## Arguments

//    `target` : un objet contenant la méthode `method`.
//    `method` : une `String` indiquant le nom de la méthode de `target` à espionner.

// ## Conditions

//    N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`
//    Ne créez aucune fonction superflue

// ## Conseils

// Les fonctions ont un contexte (une valeur de this), une entrée (les arguments) et une sortie (la valeur de retour).
//Assurez vous que vous préservez tous ces aspects pour la fonction que vous espionnez.

// ## Base de travail

    function Spy(target, method) {

        // Le but est de compter le nombre de fois que la fonction est utilisée.
        
        //Je définis la fonction à espionner.
        const firstFunction = target[method];

        //J'initialise un compteur que je vais incrémenter de 1 chaque fois que spiedFunction est utilisée.
        let count = 0;

        //J'ajoute l'incrémentation du compteur à chaque appel de la fonction originale en utilisant les mêmes arguments.
        target[method] = function() {
            count++;
            //grâce à apply on appelle la première méthode avec les mêmes arguments.
            return firstFunction.apply(this, arguments);
        }

        //Je retourne le compteur incrémenté sous la forme d'un objet.
        return {count};
    }

    module.exports = Spy