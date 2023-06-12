//III (not from the exercise for students)
  //i
  let myFood = {
    fruit: "banana",
    vegetable: "cucumber",
    food: ["bread", "cake", "pizza"],
  };
  //destructuring
 
  //III
  //question i
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  let personOne = new Person("Marko", 30);
  //console.log(personOne.greet());


  //ii
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
    study() {
      return `I am studying in grade ${this.grade}`;
    }
  }
  //instantiate a sub-class
  let studentTwo = new Student("Silvia", 12, 6);

  //console.log(studentTwo.study());


  //iii
  class Shape {
    constructor(color) {
      this.color = color;
    }
    getColor() {
      return `The color of this shape is : ${this.color}`;
    }
  }
  let myColor = new Shape("blue");
  //console.log(myColor.getColor());
  
  //iv
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
    getArea(radius) {
      console.log("the area of the circle is " + 3.14 * radius * radius);
      //or
      //return Math.PI * Math.pow(this.radius, 2);
    }
  }
  let myCircle = new Circle("green", 4);
  //console.log(myCircle);
  //console.log(myCircle.getArea(4));
  

  //v
  class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    start() {
      return `The ${this.make} ${this.model} ${this.year} is starting - vroom vroom!.`;
    }
  }
  let myVehicle = new Vehicle("Japan", "Suzuki", 2023);
  // console.log(myVehicle.start());


  //vi
  class Car extends Vehicle {
    constructor(make, model, year, color) {
      super(make, model, year);
      this.color = color;
    }
    stop() {
      return `The ${this.color} ${this.make} ${this.model} ${this.year} is stopping.`;
    }
  }
  let myNewCar = new Car("Sweden", "Volvo", 2019, "black");
  //console.log(myNewCar.stop()); 
  
  
 