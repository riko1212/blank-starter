/*
 * Деструктуризація об'єктів
 */
/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// const firstName = user.firstName;
// const lastName = user.lastName;
// const userAge = user.age;
// const isAdmin = user.isAdmin || false
// const { lastName, age: userAge, firstName, isAdmin = false } = user;
// const { lastName, age: userAge, ...otherProps } = user;

// console.log('user: ', user);
// console.log(lastName, userAge);
// console.log(otherProps);
/*
 * Глибока деструктуризація об'єктів
 */
// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const {
//   number,
//   flag,
//   employees,
//   langs: { original, secondary },
// } = team;

// console.log(teamLangs, original, secondary);

/*
 * Деструктуризація масивів
 */
// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const rgb = [210, 100, 50];

// const red = rgb[0];
// const green = rgb[1];
// cont blue = rgb[2];

// const [red, green, blue] = rgb;

// console.log(blue);
