//CUSTOM APP UTILS
//while importing named functions is important, and not the order in which the functions are imported

import sub, { square, add } from './utils.js';
console.log('app.js is running now!');
console.log(square(3));
console.log(add(3, 4));
console.log(sub(4, 3));

import isSeniorCitizen, { canDrink, isAdult } from './person.js';
console.log(isAdult(15));
console.log(canDrink(15));
console.log(isSeniorCitizen(75));

//IMPORT NODE/YARN MODULES
//install -> import -> use
import validator from 'validator';

console.log(validator.isEmail('test@gmail.com'));