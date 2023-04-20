// ## Défi

// Écrivez une fonction récursive qui renvoie toutes les dépendances (et sous-dépendances) unique d’un module, triées alphabétiquement.
// Elles doivent être affichées au format dependance@version, par ex. inflection@1.2.6.

// On autorise des versions multiples d’un même module, mais les doublons (versions identiques) doivent être retirés.

// ## Arguments

//   `tree` : Une arborescence de dépendances.  Voir ci-dessous pour sa structure.

// ## Exemple

    // var loremIpsum = {
    //   "name": "lorem-ipsum",
    //   "version": "0.1.1",
    //   "dependencies": {
    //     "optimist": {
    //       "version": "0.3.7",
    //       "dependencies": {
    //         "wordwrap": {
    //           "version": "0.0.2"
    //         }
    //       }
    //     },
    //     "inflection": {
    //       "version": "1.2.6"
    //     }
    //   }
    // }

    // getDependencies(loremIpsum) 
    // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]


// ## Conditions

//   N’utilisez pas de boucle `for`/`while`.


// ## Ressources

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys

// ## Base de travail

//Je dois renvoyer un tableau contenant pour chaque valeur une dépendance de l'objet tree.
//Avec object.keys() je peux renvoyer un tableau contenant les propriétés propres à un objet
//Le format de restitution de chaque valeur doit être "dependance@version". i.e. => ${dependance} @ ${version}
//Le tableau doit être trié par ordre alphabétique. Je peux utiliser la méthode .sort()
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function getDependencies(tree, result =[], subResultValue=[]) {
  if (!tree || !('dependencies' in tree) ){
    return [];
  }

  const dependencies = tree.dependencies;

  const dependencyKeys = Object.keys(dependencies);

  if (dependencyKeys.length === 0 ) {
    return result.sort();
  }

  const firstDependencyKey = dependencyKeys[0];
  const firstDependencyObject = dependencies[firstDependencyKey];

    if (('dependencies' in firstDependencyObject)){
      const subDependencies = firstDependencyObject.dependencies;
      const subDependencyKeys = Object.keys(subDependencies);


      const subDependencyKey = subDependencyKeys[0];
      const subDependencyObject = subDependencies[subDependencyKey];
      const subResultValue = `${subDependencyKey}@${subDependencyObject.version}`;

      if(subDependencyKeys.length === 0) {
        return subResultValue;
      }

      delete firstDependencyObject.dependencies[subDependencyKey];
    }
    
    const resultValue = `${firstDependencyKey}@${firstDependencyObject.version}`;
    
    
    result.push(subResultValue, resultValue);
    delete tree.dependencies[firstDependencyKey];
    getDependencies(tree, result, subResultValue);

}

module.exports = getDependencies