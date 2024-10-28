# Variables et types de données

## Introduction

Dans cette leçon, vous apprendrez à déclarer des variables et à utiliser différents types de données en JavaScript. Comprendre ces concepts est essentiel pour manipuler des données et créer des applications interactives.

## 1. Qu'est-ce qu'une variable ?

Une variable est un conteneur pour stocker des données. En JavaScript, vous pouvez déclarer une variable en utilisant les mots-clés `var`, `let`, ou `const`.

### Exemples de déclaration de variables :

```javascript
// Utilisation de var
var nom = "Alice";

// Utilisation de let
let age = 25;

// Utilisation de const
const pays = "France";
```
## 2. Types de données en JavaScript

JavaScript prend en charge plusieurs types de données, qui se divisent en deux catégories principales : les types primitifs et les types d'objet.

### Types primitifs

1. **String** : Représente une chaîne de caractères.
   ```javascript
   let message = "Bonjour, monde!";
   ```

2. **Number** : Représente les nombres (entiers et flottants).
   ```javascript
   let nombre = 42;
   let prix = 19.99;
   ```

3. **Boolean** : Représente une valeur vraie ou fausse.
   ```javascript
   let estActif = true;
   let estAdmin = false;
   ```

4. **Undefined** : Une variable qui a été déclarée mais n'a pas encore reçu de valeur.
   ```javascript
   let test;
   console.log(test); // Affiche "undefined"
   ```

5. **Null** : Une valeur délibérément vide ou nulle.
   ```javascript
   let utilisateur = null;
   ```

6. **Symbol** : Un type de données unique, souvent utilisé comme identifiant pour les propriétés d'objet (introduction dans ES6).
   ```javascript
   let sym = Symbol("description");
   ```

### Types d'objet

Les objets sont des collections de propriétés. Ils peuvent contenir des données complexes.

```javascript
let personne = {
    nom: "Alice",
    age: 25,
    pays: "France"
};
```

## 3. Déclaration et initialisation de variables

Vous pouvez déclarer une variable sans l'initialiser, puis lui assigner une valeur plus tard.

```javascript
let score;
score = 100; // Initialisation plus tard
```

### Bonnes pratiques

- Utilisez `let` pour les variables dont la valeur peut changer.
- Utilisez `const` pour les constantes qui ne changent pas.
- Évitez `var` pour éviter des comportements imprévus liés à la portée.

## 4. Exercices pratiques

Pour mettre en pratique ce que vous avez appris, consultez le dossier [exercices](./exercices/).

## Conclusion

Dans cette leçon, vous avez appris à déclarer des variables et à travailler avec différents types de données en JavaScript. Cela constitue la base pour la manipulation de données dans vos programmes. Dans la prochaine leçon, nous aborderons les opérateurs.

---

N'hésitez pas à poser des questions si vous avez besoin de clarifications !