// const person = {
//     name: 'Trupti',
//     age: 33,
//     location: {
//         city: 'Bellevue',
//         temp: 88
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ready Player One',
//     author: 'someone',
//     publisher: { 
//         name: 'quack'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher;
// console.log(publisherName);

// const address = ['16931 42nd Dr SE', 'Bothell', 'Washington', '98012'];


// const [, city, state = 'New York', zip] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [type, , medium, ] = item;

console.log(`A medium ${type} costs ${medium}`);