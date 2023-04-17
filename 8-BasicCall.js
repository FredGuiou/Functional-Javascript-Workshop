
// # Défi

// Écrivez une fonction duckCount() qui inspecte les arguments qu’on lui passe et renvoie le nombre de ceux qui ont une propriété propre quack définie.  Ignorez les propriétés hérités des prototypes.

// Exemple :

//     var notDuck = Object.create({quack: true})
//     var duck = {quack: true}
//     duckCount(duck, notDuck) // 1

// ## Arguments

// Vous recevrez un nombre variable d’arguments, d’un appel à l’autre.
// Chaque argument pourra être d’un type quelconque, avec des propriétés quelconques.
// Certains arguments auront une propriété "quack", parfois héritée du prototype.
// Certains pourrons ne pas être équipés de "hasOwnProperty()"".

// ## Conditions

//   N’utilisez ni boucle (`for`, `while`…) ni `Array.prototype.forEach`
//   Ne maintenez pas de variable pour le compteur / l’accumulateur.
//   Ne créez aucune fonction superflue

// ## Conseil

// La variable automatique "arguments", disponible dans toute fonction, est un objet qui ressemble à un tableau sans en être vraiment un :

//     {
//       0: 'argument0',
//       1: 'argument1', // etc.
//       length: 2
//     }

//Ma solution

    function duckCount() {
        //Je filtre "l'objet qui ressemble à un tableau ans en être vraiment un"
        let quack = Array.prototype.filter.call(arguments,
            function (arg){
                //sur la propriété 'quack' définie en direct et pas reçue par héritage.
                return Object.prototype.hasOwnProperty.call(arg, 'quack');
        });
        //Je retourne le nombre de quack obtenus précédemment.
        return quack.length;
    }

    module.exports = duckCount