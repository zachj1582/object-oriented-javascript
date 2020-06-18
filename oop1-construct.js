//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...
class WhyClass {
  constructor(purpose) {
    this.purpose = purpose;
  }
  explain() {
    return console.log(this.purpose);
  }
  pieces() {
    console.log('Class name/declaration, constructor(if you dont use then JS will make an empty constructor for the class), attributes/methods to handle the purpose of the class.')
  }
}

becauseClass = new WhyClass('Classes are used in OOP as blueprints for creating objects, providing initial values for state, and implementations of behaviour.')

becauseClass.explain()

becauseClass.pieces()


/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...

class Animal {
    constructor(name, animalClass, nocturnal, energy) {
        this.name = name,
        this.animalClass = animalClass,
        this.nocturnal = nocturnal,
        this.energy = energy
    }
    sleep(){
        this.energy += 1
    }
    iAm(){
        console.log(`I am a ${this.name} , a ${this.animalClass}... am I nocturnal?... ${this.nocturnal}`)
    }
}

jaguar = new Animal('Jaguar', 'Mammal', false, 4)
pygmyMarmoset = new Animal('Pygmy Marmoset', 'Mammal', false, 8)
spectacledOwl = new Animal('Spectacled Owl', 'Bird', true, 6)
tocoToucan = new Animal('Toco Toucan', 'Bird', false, 6)
blackCaiman = new Animal('Black Caiman', 'Reptile', true, 9)
greenAnaconda = new Animal('Green Anaconda', 'Reptile', true, 6)
poisinDaratFrogs = new Animal('Poisin Dart Frogs', 'Reptile', false, 10)
ocelot = new Animal('Ocelot', 'Mammal', true, 6)

jaguar.iAm()
console.log(jaguar.energy)
jaguar.sleep()
console.log(jaguar.energy)



/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */

class Shape {
  //your code here...
  constructor(name, sides=0, base=0, height=0, length=0, width=0, radius=0){
      this.name=name,
      this.sides=sides,
      this.base=base,
      this.height=height,
      this.length=length,
      this.width=width,
      this.radius=radius
  }
  calcTriArea() {
    console.log(
      `${this.name}'s area is calculated to be : ${
        0.5 * this.base * this.height
      }`
    );
  }
  calcTriPerimeter() {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        this.base + (this.sides[1] + this.sides[2])
      }`
    );
  }
  calcRectArea() {
    console.log(
      `${this.name}'s area is calculated to be : ${this.length * this.width}`
    );
  }
  calcRectPerimeter() {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        2 * this.length + 2 * this.width
      }`
    );
  }
  calcCircArea() {
    console.log(
      `${this.name}'s area is calculated to be : ${(
        Math.PI *
        this.radius ** 2
      ).toFixed(2)}`
    );
  }
  calcCircumference() {
    console.log(
      `${this.name}'s circumference is calculated to be : ${(
        2 *
        Math.PI *
        this.radius
      ).toFixed(2)}`
    );
  }
  calcHexPerimeter() {
      console.log(
          `${this.name}'s perimeter is calculated to be : ${this.sides * this.length}`
      )
  }
  calcHexArea() {
    console.log(
        `${this.name}'s area is calculated to be : ${(3*Math.sqrt(3)*Math.pow(this.length, 2)/2).toFixed(2)}`
    )
  }
  calcPentArea(){
    console.log(
        `${this.name}'s area is calculated to be : ${((this.sides * this.length)*pentagon.height/2).toFixed(2)}`
    )
  }
  calcOctArea(){
      console.log(
          `${this.name}'s area is calculated to be : ${(2*(1+Math.sqrt(2))*Math.pow(this.sides, 2)).toFixed(2)}`
      )
  }
}

// const triangle = {
//   name: "triangle",
//   sides: [4, 7, 7], //lengths of each side
//   base: null,
//   height: null, //determine this height using basic geometry.  You may need to research this one.
//   calcArea: function () {
//     console.log(
//       `${this.name}'s area is calculated to be : ${
//         0.5 * this.base * this.height
//       }`
//     );
//   },
//   calcPerimeter: function () {
//     console.log(
//       `${this.name}'s perimeter is calculated to be : ${
//         this.base + (this.sides[1] + this.sides[2])
//       }`
//     );
//   },
// };

triangle = new Shape('Triangle', [4, 7, 7])

triangle.base = triangle.sides[0]; //base is the 1st side in the triangle.sides array.
const a = (triangle.base / 2) ** 2
const b = triangle.sides[1] ** 2
triangle.height = Math.sqrt(b - a).toFixed(2) //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(
// triangle.height = 6.71

console.log(triangle);
triangle.calcTriArea();
triangle.calcTriPerimeter();

// const rectangle = {
//   name: "rectangle",
//   sides: 4,
//   length: 2,
//   width: 5,
//   calcArea: function () {
//     console.log(
//       `${this.name}'s area is calculated to be : ${this.length * this.width}`
//     );
//   },
//   calcPerimeter: function () {
//     console.log(
//       `${this.name}'s perimeter is calculated to be : ${
//         2 * this.length + 2 * this.width
//       }`
//     );
//   },
// };

rectangle = new Shape('Rectangle', 4, 0, 0, 2, 5)

console.log(rectangle);
rectangle.calcRectArea();
rectangle.calcRectPerimeter();

// const circle = {
//   name: "circle",
//   sides: 1,
//   radius: 5,
//   calcArea: function () {
//     console.log(
//       `${this.name}'s area is calculated to be : ${(
//         Math.PI *
//         this.radius ** 2
//       ).toFixed(2)}`
//     );
//   },
//   calcCircumference: function () {
//     console.log(
//       `${this.name}'s circumference is calculated to be : ${(
//         2 *
//         Math.PI *
//         this.radius
//       ).toFixed(2)}`
//     );
//   },
// };

circle = new Shape('Circle', 1, 0, 0, 0, 0, 5)

console.log(circle);
circle.calcCircumference();
circle.calcCircArea();

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.*/
hexagon = new Shape('Hexagon', 6, 0, 0, 9)

console.log(hexagon)
hexagon.calcHexPerimeter()
hexagon.calcHexArea()

pentagon = new Shape('Pentagon', 5, 0,0,7)
pentagon.height = Math.sqrt(pentagon.length**2 - (pentagon.length/2)**2).toFixed(2)
console.log(pentagon)
pentagon.calcHexPerimeter()
pentagon.calcPentArea()

octagon = new Shape('Octagon', 8, 0,0,10)
console.log(octagon)
octagon.calcHexPerimeter()
octagon.calcOctArea()

//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.



class Earth {
  name;
  planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

  constructor(name, num) {
    this.name = name;
    this.planetNum = num;
  }
}

// const earth = new Earth("earth", 3);
// console.log(earth);

Earth.planetNum = 'zach'
console.log(Earth.planetNum)
console.log(`${Earth.planetNum} is awesome`)