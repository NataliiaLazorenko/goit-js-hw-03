/*
 * Оператор in і метод push

 * Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів та ім'я властивості.
 * Функція повертає масив значень певної властивості prop із кожного об'єкта в масиві.
 
 * Використай метод push для додавання значень в масив і оператор in для перевірки наявності властивості в об'єкті.
 */

function getAllPropValues(array, prop) {
  'use strict';
  // Write code under this line
  const propValues = [];

  for (const element of array) {
    for (const key in element) {
      if (key === prop) {
        propValues.push(element[key]);
      }
    }
  }

  return propValues;
}

// Об'єкти і очікуваний результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []
