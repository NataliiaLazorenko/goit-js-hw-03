/*
 * Сумування значень властивостей об'єкта
 * Напиши функцію countTotalSalary(employees), яка приймає об'єкт зарплат. Функція рахує загальну суму зарплати працівників
 * і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
 */

const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line

  const values = Object.values(employees);
  let totalSalary = 0;

  for (const value of values) {
    totalSalary += value;
  }

  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
