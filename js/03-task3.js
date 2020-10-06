/*
 * Пошук найбільшого значення серед властивостей об'єкта
 * Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого
 * (який виконав найбільше задач).
 * Співробітники і кількість виконаних задач містяться як властивості об'єкта у форматі "ім'я": "кількість задач".
 */

const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line

  const keys = Object.keys(employees);

  let maxCompletedTasks = 0;
  let bestEmployee = '';

  for (const key of keys) {
    if (employees[key] > maxCompletedTasks) {
      maxCompletedTasks = employees[key];
      bestEmployee = key;
    }
  }

  return bestEmployee;
};

// Об'єкти і очікуваний результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

const sellers1 = {};
console.log(findBestEmployee(sellers1));
// ''
