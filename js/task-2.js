/* Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
В іншому випадку функція повинна повернути весь новий масив.
*/

function makeArray(firstArray, secondArray, maxLength) {
// перевірка на масив
Array.isArray(firstArray) || Array.isArray(secondArray) !== true ? "Please, enter array!" : continue;

перевірка на число

const newArray = firstArray.concat(secondArray);

return newArray;
}
// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea']);

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea']));

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

const a = ['c', 'z', 'c'];
console.log(Array.isArray(a));
