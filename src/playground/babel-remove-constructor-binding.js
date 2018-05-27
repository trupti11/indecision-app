
class OldSyntax {
    constructor() {
        this.name= 'trupti';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `hi i am ${this.name}`;
    }
}

class NewSyntax {
    name = 'Trupti';
    getGreeting = () => {
        return `hi i am ${this.name}`;
     }
}

const newSyntax = new NewSyntax();
console.log(newSyntax.getGreeting());
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting()); 