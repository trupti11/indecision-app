

//var is okay to use, however, it's often misused and could be meddled with other stuff
//nameVar can be overwritten without our knowledge since no error is thrown!!
//hard to debug - SO NEVER USE VAR NOW!!!


//let is used when the variable is declared and is actually altered later
//when the variable value doesn't change, then it's a const

const nameVar = 'Trupti';
const nameVar = 'Tru';

console.log('nameVar, ', nameVar);

let nameLet = 'TT';
//let nameLet = 'test'; -- not legal any more
console.log('nameLet, ', nameLet);

const nameConst = 'This';
//const nameConst = 'That';  --not allowed
console.log('nameConst,', nameConst);


function getPetName() {
    const petName = 'meow';
    return petName;
}

const petName = getPetName();

console.log(petName);

// Block level scoping

const fullName = 'Trupti Wagh';
const firstName;

if (fullName) {
    //let firstName  = fullName.split(' ')[0];
    firstName  = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName); //not defined