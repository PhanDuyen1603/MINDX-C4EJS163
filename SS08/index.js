let student = {
  name: "John Doe",
  age: 20,
};

student.major = "Computer Science";


console.log(student);

// Cau 2:
let person = {name: "Alice", age: 30, job: "Developer"};

delete person.job;
delete person.name;

console.log(person);

//Cau 3: 
let car = { brand: "Toyota", model: "Camry", year: 2020, color: "White", mileage: 15000 };

let count = Object.keys(car).length;

console.log(count);

//Cau 4:
let product = { name: "Laptop", price: 1200 };

let result = Object.entries(product);

console.log(result);

//Cau 05:
let products = [{
    name: "Phone", 
    price: 800
  }, {
    name: "Tablet", 
    price: 600
},
{
    name: "Camera", 
    price: 600
},
]

let found;
for ( let i = 0; i < products.length; i++) {
    if (products[i].name ==="Camera")  {
        found = products[i];
        break;
    }
}

console.log(found);
