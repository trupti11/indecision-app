//es5 - method 1 -- anonymous function
const squareConst = function (x) {
    return x * x;
};

//es5 method 2 -- named function
function squareFunc(x) {
 return x * x;
};


//ess6  arrow function
const squareArrow = (x) => {
    return x * x;
};

//es6 arrow function concise
const squareArrowSingleExp = (x) => x * x;


// console.log(squareConst(7));
// console.log(squareFunc(8));
// console.log(squareArrow(9));
// console.log(squareArrowSingleExp(10));

//es5 named function
function getFirstNameFunc (name) {
    return name.split(' ')[0];
};

//es5 anonymous function
const getFirstNameConst = function (name) {
    return name.split(' ')[0];
};

//es6 arrow
const getFirstNameArrow = (name) => {
    return name.split(' ')[0];
};

//es6 arrow concise
const getFirstNameArrowSingleExp = (name) => name.split(' ')[0];

console.log(getFirstNameFunc('Trupti Wagh'));
console.log(getFirstNameConst('Yogesh Wagh'));
console.log(getFirstNameArrow('Varsha Wagh'));
console.log(getFirstNameArrowSingleExp('Ojas Wagh'));
