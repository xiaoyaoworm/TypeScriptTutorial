interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName + " " + middleInitial + " "+ lastName;
    }
}


function greeter(person: Person){
    return "Hello, " + user.fullName;
}

var user = new Student("Leon", "YJ", "Jiang");
document.body.innerHTML = greeter(user);
