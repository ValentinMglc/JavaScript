# Parser une chaîne de caractères en JavaScript

Dans cet exercice, vous allez créer une fonction qui va analyser une chaîne de caractères et la transformer en une liste formatée. L'objectif est de convertir la chaîne en un tableau en utilisant la virgule (`,`) comme séparateur. Vous devez également appliquer les règles suivantes à chaque mot de la liste :

1. **Majuscules** : Chaque mot doit être transformé en majuscules.
2. **Tri** : Les mots doivent être triés par ordre alphabétique.
3. **Indexation** : Si un mot contient exactement deux voyelles, vous devez ajouter l'index de ce mot à la fin.

## Prototype de la fonction :

```javascript
function parser(str)
```

## Exemple d'utilisation :

Si vous appelez la fonction avec les arguments suivants :

```javascript
parser("bonjour, au revoir, merci")
```
Le programme doit renvoyer `[AU REVOIR, BONJOUR, MERCI 2]`

## Remarques :

Réfléchissez à des méthodes pour :

    - Créer un tableau à partir d'une chaîne.
    - Trier un tableau.
    - Transformer des chaînes en majuscules.

N'oubliez pas que vous êtes en JavaScript. Profitez des fonctions intégrées disponibles en JavaScript pour vous aider à réaliser cette tâche.
