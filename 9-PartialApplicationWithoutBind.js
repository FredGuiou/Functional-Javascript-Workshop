// # Défi

// Utilisez l’application partielle pour créer une fonction qui pré-remplit un premier argument pour console.log().  En somme, implémentez une fonction de log qui préfixe son message.

// Votre implémentation doit accepter une String de préfixe, et renvoyer une fonction qui affichera les contenus qu’on lui passe sur la console, préfixée par cette String.

// Vous aurez besoin de Function#apply() pour implémenter l’application partielle.

// Assurez-vous que tous les arguments passés à la fonction de log (celle renvoyée par la fonction que vous allez écrire) sont bien affichés.

// Affichez le résultat directement sur la console.

// ## Arguments

//    `namespace` : une `String` qui préfixe les messages passés à la fonction qui sera retournée.

// ## Exemple

//     var info = logger('INFO :')
//     info('ceci est un message d’information')
    // INFO : ceci est un message d’information

//     var warn = logger('WARN :')
//     warn('ceci est un avertissement', 'avec du rab')
    // WARN : ceci est un avertissement avec du rab

// ## Conditions

//    N’utilisez pas `Function#bind()`
//    Utilisez `Function#apply()`

// ## Base de travail

    var slice = Array.prototype.slice

    function logger(namespace) {
        //pawb = partial application without bind
        function pawb() {
            //l'argument namespace est le préfixe utilisé pour le message de log ex : INFO ou WARN;
            //On crée un nouveau tableau en utilisant la concaténation .concat entre namespace et les "arguments" passés à celle - ci.
            //On utilise la variable slice pour convertir les arguments de la fonction en un nouveau tableau qui se retrouve concaténé à [namespace].
            let result = [namespace].concat(slice.call(arguments));
            
            //on appelle console.log + apply qui permet de spécifier un contexte avec des this implicites.
            console.log.apply(console, result);
        };
        return pawb;

    }

    module.exports = logger