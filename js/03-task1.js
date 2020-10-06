/*
 * CRUD для властивостей об'єкта
 * С - create (створити)
 * R - read (читати)
 * U - update (оновити)
 * D - delete (видалити)

 * Напиши скрипт, який для об'єкта user послідовно:
 * 1. додає поле 'mood' зі значенням 'happy'
 * 2. додає поле 'full time' зі значенням true
 * 3. замінює значення 'hobby' на 'skydiving'
 * 4. замінює значення 'premium' на false
 * 5. у змінну message записує вміст об'єкта user:
 *   - для змінної keys присвоює масив властивостей об'єкта, використовуючи метод Object.keys()
 *   - за допомогою оператора for...of
 *   - у форматі ключ:значенння
 *   - з переносом рядка ('\n')
 */

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.mood = 'happy';
user['full time'] = true;
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
// Write code under this line

for (const key of keys) {
  message += `${key}: ${user[key]} \n`;
}

// Альтернативний варіант через for...in
// for (const key in user) {
//   message += `${key}: ${user[key]} \n`;
// }

console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */
