/*
 * Підсумовування значень властивості із масиву об'єктів
 * Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту
 * (значення властивості name). Повертає загальну вартість продукту (ціна помножена на кількість).

 * Викличи функції для перевірки працездатності твоєї реалізації.
 * // calculateTotalPrice(products, 'Радар')); // 9080
 * // calculateTotalPrice(products, 'Сканер')); // 10200
 * // calculateTotalPrice(products, 'Захват')); // 2400
 * // calculateTotalPrice(products, 'Дроид')); // 2800
 */

function calculateTotalPrice(array, prop) {
  'use strict';
  // Write code under this line
  let totalPrice = 0;

  for (const element of array) {
    if (element.name === prop) {
      totalPrice += element.price * element.quantity;
    }
  }

  return totalPrice;
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

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
