# Créer une fonction `do_op` en JavaScript

Pour cet exercice, vous allez créer une fonction nommée `do_op`. Cette fonction prendra trois paramètres : deux nombres (`nb1` et `nb2`) et un opérateur (`op`).

## Prototype de la fonction :

```javascript
function do_op(nb1, nb2, op)
```

## Exemple d'utilisation :

Si vous appelez la fonction avec les arguments suivants :

```javascript
do_op(20, 12, '+')
```
La fonction doit renvoyer `32`

## Opérateurs à gérer :

Votre fonction doit pouvoir gérer les opérateurs suivants :

- Addition (`+`)
- Soustraction (`-`)
- Multiplication (`*`)
- Division (`/`)
- Modulo (`%`)

Assurez-vous de bien vérifier que l'opérateur fourni est valide et d'ajouter des messages d'erreur appropriés si nécessaire.