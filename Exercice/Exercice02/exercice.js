function parser(str) {
  var string = ['c'.toUpperCase(), 'a'.toUpperCase(), 'b'.toUpperCase()].sort((a, b) => {
    return a.localeCompare(b)
  });
console.log(string);
}
parser('toto')




/*
str.indexOf();

console.log(str);
var result = str.toUpperCase();
console.log(result);

var str = [
  { name: 'c', value : 3 },
  { name :'a', value : 1 },
  { name :'b', value : 2 }
];
str.sort((a, b) => a.value - b.value);
console.log(str);
*/