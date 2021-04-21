//Objetos con palabra reservada const

const Manager = {
name: 'Guillermo',
company: 'Telefonica',
age: 32,
job: 'Software Engineer'
}

const Interno = {
    name: 'Francisco',
    age: 21,
    job: 'Ir por el café a Starbucks y sacar copias.'
}

function sayHello(){
    console.log("Hello... It's a-me, ", this.name);
}

function myAge(){
    console.log('What is my age again? ', this.age, 'years old.');
}

Manager.sayHello = sayHello;
Interno.sayHello = sayHello;

Manager.myAge = myAge;
Interno.myAge = myAge;

console.log('Manager: ', Manager);
Manager.sayHello();
Manager.myAge();

console.log("\n");

console.log('Intern: ', Interno);
Interno.sayHello();
Interno.myAge();
