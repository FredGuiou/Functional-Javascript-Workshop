// La base de travail fournie plus bas contient une définition de repeat().  Celle-ci recevra une opération sous forme de Function,
//et un nombre num, pour invoquer la fonction num fois :

//     var count = 0
//     repeat(function() {
//       count++
//     }, 100)

//     console.log('exécuté %d fois.', count)
    // => exécuté 100 fois.

// MAIS vous remarquerez qu’exécuter repeat() avec un nombre trop grand de répétitions causera un débordement de pile (stack overflow) :

    // var count = 0
    // repeat(function() {
    //   count++
    // }, 100000)

    // console.log('exécuté %d fois', count)
    // => RangeError: Maximum call stack size exceeded

// # Défi

// Modifiez la base de travail ci-dessous pour qu’elle utilise un trampoline afin que la fonction s’appelle elle-même continuellement.

// Vous pouvez supposer que l’opération qui vous sera fournie ne prend aucun argument (ou qu’ils sont déjà pré-remplis), et que sa valeur de retour est sans importance.

// ## Conditions

// Vos modifications de l’implémentation de repeat() ne doivent pas utiliser de boucles ou d’itérateurs (ex. forEach()).

// ## Conseils

//    Modifiez `repeat()` pour qu’elle envoie la « prochaine étape », s’il y en a une.
//    Un trampoline continue à exécuter les étapes en obtenant à chaque tour la suivante, jusqu’à ce qu’il n’y en ait plus.
//    Pour le coup, vous pouvez utiliser une boucle dans votre fonction de trampoline !
//    Si votre programme prend trop de temps à s’exécuter, vous avez probablement un souci.  Utilisez Ctrl+C pour arrêter le processus Node.

// ## Base de travail

function repeat(operation, num) {
    // Modifiez ce code pour qu’il ne cause pas de débordement de pile !

    //J'utilise la technique de "fermeture" (closure) afin que l'appel de repeat ne soit pas effectué immédiatement.
    //Il est renvoyé comme une fonction dont le type est vérifié dans le trampoline.

    return function() {
        if (num <= 0) {
            return;
        }

        operation();
        
        return repeat(operation, --num);
        
    }
}

function trampoline(fn) {
    // Voilà où implémenter votre trampoline ; une boucle est autorisée ici.
    // Pour créer la fonction trampoline je me suis servi de cet articles 
    // https://blog.logrocket.com/using-trampolines-to-manage-large-recursive-loops-in-javascript-d8c9db095ae3/
    // Tant que fn existe et que son type est fonction alors la fonction se rappelle par récursivité fn = fn(); jusqu'à e qu'il n'y ait plus d'appel récursif.

    while (fn && typeof fn === 'function') {
        fn = fn();
    }

}

module.exports = function(operation, num) {
    // Et voilà où vous voudrez sans doute plutôt appeler votre trampoline !
    // J'englobe le return de l'appel de repeat(); dans le trampoline.
    trampoline(() => {
        return repeat(operation, num);
    });
}