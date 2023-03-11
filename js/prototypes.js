/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */
const user = {
  firstName: 'Oleksii',
  age: 40,
};

const user2 = Object.create(user);

user2.firstName = '';
user2.lastName = 'Brock';

console.log('user: ', user);
console.log('user2: ', user2);
console.log(user2.firstName);

const user3 = Object.create(user2);

user3.firstName = 'Celia';

console.log('user3: ', user3);

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()
// console.log(user3.hasOwnProperty('firstName'));

//* Цикл for...in, перебирає і власні, і не власні властивості.
for (const prop in user3) {
  if (user3.hasOwnProperty(prop)) {
    console.log(`${prop}: ${user3[prop]}`);
  }
}
