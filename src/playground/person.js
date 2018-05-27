console.log('util.js running');

export const isAdult = (age) =>  age >= 18;
export const canDrink = (age) => age >= 21; 

export default (age) => age >= 65;

//exports - default - named
// export { square, add };