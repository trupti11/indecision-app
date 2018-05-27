//arguments object no longer bound with arrow functions!

const add = function(a, b) {
    console.log(arguments);
    return a + b;
};


console.log(add(87, 1, 2));

const addArrow = (a, b) => {
    //console.log(arguments); -- not allowed
    return a + b;
};

//this keyword no longer bound with arrow functions!!!!
const user = {
    name: 'Trupti',
    cities: ['Philadelphia', 'Bothell', 'Redmond'],

    // console.log(this.name);
        // console.log(this.cities);

        // const that = this;

        // this.cities.forEach(function(city) {
        //     console.log(that.name + ' has lived in ' + city);
        // });
        
    printPlacesLived() {
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

        return this.cities.map((city) => this.name + " has lived in " + city);
    }

    // printPlacesLived: function () {
    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city);
    //     });
    // }
};

//console.log(user.printPlacesLived());

const multiplier = {
    //numbers - array of nums
    numbers: [1,2,3],

    // multiplyBy - single number
    multiplyBy: 4,

    //multiply - return array of numbers have been multiplied
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.multiply());