/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
  constructor() {
    if (this.constructor == Creature) {
      throw new Error("Unable to instantiate");
    }
  }
  move() {
    throw new Error("Move cannot be invoked");
  }
  act() {
    throw new Error("Act cannot be invoked");
  }
}

class Human extends Creature {
  constructor(name, weight, age) {
    super();
    this.name = name;
    this.weight = weight;
    this.age = age;
  }
  move = () => {
    console.log(`${this.name} ran 200 yards! And had to take a nap...`);
  };
  act = () => {
    console.log(`${this.name} acted, shakespeare was disappointed... `);
  };
  info() {
    console.log(`Name: ${this.name}, Weight: ${this.weight}, Age: ${this.age}`);
  }
}

zach = new Human(
  "Zach",
  "too much, Ill go to the gym someday...",
  `rude demand...`
);
zach.move();
zach.act();
zach.info();

class HouseElf extends Creature {
  constructor(name, owners, height) {
    super();
    this.name = name;
    this.owners = owners;
    this.height = height;
  }
  move = () => {
    console.log(
      `${this.name} disapperates (uses magic to travel ya muggle...)`
    );
  };
  act = () => {
    console.log(`${this.name} acted, shakespeare was disappointed... `);
  };
  info() {
    console.log(
      `${this.name} is ${this.height} feet tall, ${this.name} belongs to ${this.owners}`
    );
  }
}

dobby = new HouseElf("Dobby", "Dobby is a free Elf!!", 3.2);

dobby.info();

class Fish extends Creature {
  constructor(name, colors, lost) {
    super();
    this.name = name;
    this.colors = colors;
    this.isLost = lost;
  }
  move = () => {
    console.log(`${this.name} swims`);
  };
  act = () => {
    console.log(`${this.name} acted, shakespeare was disappointed... `);
  };
  talks() {
    console.log(
      `${this.name} says "blrblbuubblleburb". Umm, What! Are you lost? ${this.name} "bbllurblessblblebrrs". ... I guess that means ${this.isLost} ...`
    );
  }
}
nemo = new Fish('Nemo', "Orange and white", true)
nemo.talks()
/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
  name;

  eat  () {
    console.log(this.name + " is eating");
  }

  sleep = () => {
    console.log(this.name + " is sleeping");
  };

  code = function () {
    console.log(this.name + " is coding");
  };

  repeat = function () {
    console.log(this.name + " is repeating the above steps, yet another time");
  };

  explain() {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
    console.log(
      "Just change all child methods to arrow functions to give the highest priority to the child"
    );
  }
}



class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat = () => {
    console.log(this.name + " loves to teach before eating");
  }

  sleep = () => {
    console.log(this.name + " sleeps after preparing the lesson plan");
  }

  code = () => {
    console.log(this.name + " codes first, then teaches it the next day.");
  };

  repeat = () => {
    console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
  }
}

class Student extends Person {
  //set up your methods in this student class, so all of these methods will override the methods from the super class.
  //eat method should print out - <stduent name> studies, then eats
  //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
  //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
  //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.
  constructor(name) {
    super(name);
    this.name = name;
  }

  eat = () => {
    console.log(this.name + " studies, then eats...");
  }

  sleep = () => {
    console.log(this.name + " studies coding so much, that they dream about it in their sleep.");
  }

  code = () => {
    console.log(this.name + " was first overwhelmed by coding, but kept at it, and now has become a coding guru!");
  };

  repeat = () => {
    console.log(this.name + " keeps on studying, coding, eating, and sleeping, and puts it all on repeat.");
  }
}

const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
  prepare (food1, food2, food3) {
    console.log("The cook is cooking " + food1, food2, food3);
  }

  prepare = function (food1, food2, food3) {
    console.log("The cook is cooking " + food1, food2, food3);
  };

  explain = () => {
    console.log(
      "what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method.   => => I just passed the parameters to the second argument since it already had precedence due to being in the field"
    );
  };
}

const cook = new Cook();

cook.prepare("turkey", "salami", "pizza");

cook.explain();
