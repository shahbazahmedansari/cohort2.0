// SECTION 1: Objects and OOPS Thinking (Foundation):

// 1. Create a user object that stores name and email and has a login method which prints "User logged in".

let user = {
  name: "Rahul",
  email: "rahul@gmail.com",
  login: function () {
    console.log("User logged in");
  }
};

// user.login();

// 2. Imagine you have 5 users.
// First think how would you imagine them without a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

let user1 = {
  name: "Tyson",
  email: "tyson@gmail.com",
  login: function () {
    console.log("User logged in");
  }
};
let user2 = {
  name: "Ray",
  email: "ray@gmail.com",
  login: function () {
    console.log("User logged in");
  }
};
let user3 = {
  name: "Max",
  email: "max@gmail.com",
  login: function () {
    console.log("User logged in");
  }
};
let user4 = {
  name: "Kai",
  email: "kai@gmail.com",
  login: function () {
    console.log("User logged in");
  }
};
let user5 = {
  name: "Daichi",
  email: "daichi@gmail.com",
  login: function () {
    console.log("User logged in");
  }
};

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   login() {
//     console.log("User logged in");
//   }
// }

let user6 = new User("Goku", "goku@gmail.com");
let user7 = new User("Gohan", "gohan@gmail.com");
let user8 = new User("Vegeta", "vegeta@gmail.com");
let user9 = new User("Yamcha", "yamcha@gmail.com");
let user10 = new User("Tien", "tien@gmail.com");

// 3. Create a product object that stores name and price and has a method which returns the final price after discount.

let product = {
  name: "Samsung S26 Ultra",
  price: 125000,
  discountedPrice: function () {
    let discount = 10;
    let finalPrice = this.price - this.price * (discount / 100);
    return finalPrice;
  }
};

// console.log(product.discountedPrice());

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// SECTION 2: Classes and Objects:

// Create a car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed.

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`Brand: ${this.brand}, Speed: ${this.speed} kmph`);
  }
}

let car1 = new Car("Toyota", 200);
car1.drive();

// Create two differenct car objects from the same class and verify that their data is different.

let car2 = new Car("Honda", 150);
let car3 = new Car("Tata", 250);

// Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// SECTION 3: Constructor and this keyword:

// Create a Student class whose constructor accepts name and roll number.
// Add a method introduce to print both values.
// Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.

class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }

  introduce() {
    return `Name: ${this.name}, Roll number: ${this.roll}`;
  }
}

let s1 = new Student("Ramesh", 12);
console.log(s1.introduce());

// Create an object with two methods:
// One method using a normal function.
// One method using an arrow function.
// Inside both, print this and observe the difference.

let obj = {
  hi: function () {
    console.log(this);
  },
  hello: () => {
    console.log(this);
  }
};

obj.hi();
obj.hello();

// The goal is to clearly understand how this works and when it is required.

// SECTION 4: Constructor Functions and Prototypes:

// Create a User constructor function (do not use class syntax).
// Add login method in two ways:
// First, inside the constructor.
// Then, move the method to the prototype.

function User(name) {
  this.name = name;
  this.login = function () {
    console.log("User logged in 1");
  };
}

User.prototype.login2 = function () {
  console.log("User logged in 2");
};

// Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

let user11 = new User("Aman");
let user12 = new User("Sarthak");
user11.login2();
user12.login2();

console.log(user11.login2() === user12.login2());

// The purpose here is to understand how prototypes help share behaviour efficiently.

// SECTION 5: call, apply, bind:

// Create a function that prints this.name.

function abcd(a, b, c, d) {
  console.log(this.name, a, b, c, d);
}

// Create an object that contains a name property.

let obj2 = {
  name: "Harsh",
};

// Use call to run the function using the object.
// Use apply to run the function using the object.
// Use bind to create a new function and then call it.
abcd.call(obj2, 1, 2, 3, 4);
abcd.bind(obj2, [1, 2, 3, 4]);
const fnc = abcd.apply(obj2, 1, 2, 3, 4);
fnc();

// Borrow a method from one object and run it for another object using call.
const obj3 = {
  name: "Harsh",
  greet: function () {
    console.log(`Hi, ${this.name}`);
  }
};

const obj4 = {
  name: "Sheryians",
};

obj3.greet.call(obj4);

// The goal is to understand how this can be manually controlled.