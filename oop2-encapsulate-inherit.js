// 1. Create the following classes:
//     - Book class. It should have an author and publisher property.
//     - Author class. It should have a name and books property.
//     - Publisher class.  It should have an authors and books property.
//     - Review class.  It should have a rating and user property.
//     -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves.

class Book {
  author;
  #publisher = [];
  #reviews = []
  constructor(author, publisher) {
    (this.#author = author), (this.#publisher = publisher);
  }
  //getters
  getAuthor() {
    return this.#author;
  }
  getPublisher() {
    return this.#publisher;
  }
  getReviews(){
    return this.#reviews
  }
  //setters
  setAuthor(newAuth) {
    this.#author = newAuth;
  }
  setPublisher(newPub) {
    this.#publisher = newPub;
  }
  addReviews(review){
    this.#reviews.push(review)
  }
}

harryPotter = new Book("JK Rowling", "Pottermore Publishing");

console.log(harryPotter.getAuthor());

class Author {
  #name;
  #books = [];
  #reviews = []
  constructor(name, books) {
    (this.#name = name)
    //  (this.#books = books);
  }
  //getters
  getName() {
    return this.#name;
  }
  getBooks() {
    return this.#books;
  }
  //setters
  setName(newName) {
    this.#name = newName;
  }
  setBooks(newBooks) {
    this.#books.push([...newBooks]);
  }
  addReview(review){
    this.#reviews.push(review)
  }
}

class Publisher {
  #authors = [];
  #books = [];
  constructor(authors, books) {
    // (this.#authors = authors), (this.#books = books);
  }
  //getters
  getAuthors() {
    return this.#authors;
  }
  getBooks() {
    return this.#books;
  }
  //setters
  setAuthor(newAuths) {
    this.#authors.push(newAuths);
  }
  setBooks(newBooks) {
    this.#books.push([...newBooks]);
  }
}

class Review {
  #rating;
  #user;
  constructor(rating, user) {
    (this.#rating = rating), (this.#user = user);
  }
  //getters
  getRating() {
    return this.#rating;
  }
  getUser() {
    return this.#user;
  }
  //setters
  setRating(newRating) {
    this.#rating = newRating;
  }
  setUser(newUser) {
    this.#user = newUser;
  }
}

// 2. Create the following classes:
//     - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
//     - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
//     - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
//     - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.

//     - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.

class Umbrella {
    #organizationName
    #yearlyRevenue
    #numberOfBrands
    constructor(org, rev){
        this.#organizationName=org
        this.#yearlyRevenue=rev
    }
    getOrganizationName(){
        return this.#organizationName
    }
    getYearlyRevenue(){
        return this.#yearlyRevenue
    }
    getInfo(){
        console.log(`${this.#organizationName} has ${this.#numberOfBrands} and has an annual revenue of ${this.#yearlyRevenue}`)
    }

}

allegisGroup = new Umbrella('Allegis Group', '13.4b')

class Company extends Umbrella{
    #companyName
    #numberOfEmployees
    #missionStatement
    constructor(compName, numOfEmp, org, rev){
        super(org, rev)
        this.#companyName=compName,
        this.#numberOfEmployees=numOfEmp
    }
    getCompanyName(){
        return this.#companyName
    }
    getNumberOfEmployees(){
        return this.#numberOfEmployees
    }
    getMissionStatment(){
        return this.#missionStatement
    }
    setMissionStatement(statement){
        this.#missionStatement = statement
    }
}

teksystems = new Company('TEKsystems, Inc.', 80000, allegisGroup.getOrganizationName(), allegisGroup.getYearlyRevenue())
console.log(teksystems.getOrganizationName())
aerotek = new Company('Aerotek', 6000, allegisGroup.getOrganizationName(), allegisGroup.getYearlyRevenue())
allegisPartners = new Company('Allegis Partners', 200, allegisGroup.getOrganizationName(), allegisGroup.getYearlyRevenue())


class Site extends Company {
    #siteLocation
    #locationPurpose
    #locationNumber
    constructor(siteLocation, locationPurpose, locationNumber, compName, numOfEmp, org, rev){
        super(compName, numOfEmp, org, rev)
        this.#siteLocation=siteLocation
        this.#locationPurpose=locationPurpose
        this.#locationNumber=locationNumber
    }
    getSiteLocation(){
        return this.#siteLocation
    }
    getLocationPurpose(){
        return this.#locationPurpose
    }
}

irving = new Site('Irving, TX', 'Office', 213, teksystems.getCompanyName(), teksystems.getNumberOfEmployees(), teksystems.getOrganizationName(), teksystems.getYearlyRevenue())
kansasCity = new Site('Kansas City, KS', 'Warehouse', 214, teksystems.getCompanyName(), teksystems.getNumberOfEmployees(), teksystems.getOrganizationName(), teksystems.getYearlyRevenue())
london = new Site('London, UK', 'Office', 215, teksystems.getCompanyName(), teksystems.getNumberOfEmployees(), teksystems.getOrganizationName(), teksystems.getYearlyRevenue())
paris = new Site('Paris, FR', 'Manufacturing', 686, aerotek.getCompanyName(), aerotek.getNumberOfEmployees(), aerotek.getOrganizationName(), aerotek.getYearlyRevenue())
grapevine = new Site('Grapevine, TX', 'Office', 688, aerotek.getCompanyName(), aerotek.getNumberOfEmployees(), aerotek.getOrganizationName(), aerotek.getYearlyRevenue())
wichita = new Site('Wichita, KS', 'Warehouse', 696, aerotek.getCompanyName(), aerotek.getNumberOfEmployees(), aerotek.getOrganizationName(), aerotek.getYearlyRevenue())
sydney = new Site('Sydney, AUS', 'Manufacuring', 512, allegisPartners.getCompanyName(), allegisPartners.getNumberOfEmployees(), allegisPartners.getOrganizationName(), allegisPartners.getYearlyRevenue())
chicago = new Site('Chicago, IL', 'Office', 542, allegisPartners.getCompanyName(), allegisPartners.getNumberOfEmployees(), allegisPartners.getOrganizationName(), allegisPartners.getYearlyRevenue())
newYork = new Site('New York City, NY', 'Office', 533, allegisPartners.getCompanyName(), allegisPartners.getNumberOfEmployees(), allegisPartners.getOrganizationName(), allegisPartners.getYearlyRevenue())
console.log(irving.getCompanyName())



class Employee extends Site {
    #employeeName
    #jobTitle
    #salary
    #performanceReviewGrades = []
    #pto = 40
    constructor(name, title, salary, siteLocation, compName, numOfEmp, org){
        super(siteLocation, compName, numOfEmp, org)
        this.#employeeName=name,
        this.#jobTitle=title,
        this.#salary=salary
    }
    getEmployee(){
        return this.#employeeName
    }
    getTitle(){
        return this.#jobTitle
    }
    getSalary(){
        return this.#salary
    }
    raise(percent){
        this.#salary *= (percent / 100 + 1)
    }
    promotion(newRole){
        this.#jobTitle = newRole
    }
    performanceReviews(grade){
        this.#performanceReviewGrades.push(grade)
    }
    usePto(time){
        this.#pto -= time
    }
}
// just one per location; wash, rinse, repeat. In a real application you'd have a UI and this would be a form submit I would think... I could have also just looped to make 90 instances of employees but I think we get the idea
// another way to do this would have been to just instantiate 90 employees passing all of the data up eg..
// john = new Employee('John', 'CEO', 500000, 'Irving, TX', 'TEKsystems, Inc', 80000, AllegisGroup.... etc...)
john = new Employee('John', 'Ceo', 500000, irving.getSiteLocation(), irving.getCompanyName(), irving.getNumberOfEmployees(), irving.getOrganizationName())
zach = new Employee('Zach', 'Financial Officer', 1000000, london.getSiteLocation(), london.getCompanyName(), london.getNumberOfEmployees(), london.getOrganizationName())
susan = new Employee('Susan', 'Manager', 90000, kansasCity.getSiteLocation(), kansasCity.getCompanyName(), kansasCity.getNumberOfEmployees(), kansasCity.getOrganizationName())
liam = new Employee('Liam', 'Janitor', 48000, paris.getSiteLocation(), paris.getCompanyName(), paris.getNumberOfEmployees(), paris.getOrganizationName())
jake = new Employee('Jake', 'Secretary', 52000, grapevine.getSiteLocation(), grapevine.getCompanyName(), grapevine.getNumberOfEmployees(), grapevine.getOrganizationName())
nancy = new Employee('Nancy', 'Engineer', 72000, wichita.getSiteLocation(), wichita.getCompanyName(), wichita.getNumberOfEmployees(), wichita.getOrganizationName())
mary = new Employee('Mary', 'Engineer', 72000, sydney.getSiteLocation(), sydney.getCompanyName(), sydney.getNumberOfEmployees(), sydney.getOrganizationName())
jason = new Employee('Jason', 'Marketer', 62000, chicago.getSiteLocation(), chicago.getCompanyName(), chicago.getNumberOfEmployees(), chicago.getOrganizationName())
jack = new Employee('Jack', 'HR Personnel', 62000, newYork.getSiteLocation(), newYork.getCompanyName(), newYork.getNumberOfEmployees(), newYork.getOrganizationName())
emily = new Employee('Emily', 'Lawyer', 110000, newYork.getSiteLocation(), newYork.getCompanyName(), newYork.getNumberOfEmployees(), newYork.getOrganizationName())
console.log(john)
console.log(zach)
console.log(zach.getSiteLocation())
console.log(teksystems)
// ****************************************************************************************************************************************************************************************
// Bonus Exercise:

// 3. Building on Exercise 1, Do the following :
// - Create a Bookstore class.  It should contain a collection of various Book Instances.
// - Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
// - Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.

// Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.

//your code here...

class Bookstore {
  #books = []

  constructor(){

  }
  getBooks(){
    return this.#books
  }
  addBooks(book){
    this.#books.push([...book])
  }
}

discountBooks = new Bookstore()

//books
theEyeOfTheWorld = new Book()
theGreatHunt = new Book()
theDragonReborn = new Book()
theFinalEmpire = new Book()
theWellOfAscension = new Book()
theHeroOfAges = new Book()
//authors
robertJordan = new Author('Robert Jordan')
brandonSanderson = new Author('Brandon Sanderson')
//publishers
torBooks = new Publisher()
//reviews
nyTimesEOTWReview = new Review(5, 'New York Times')
washingtonPostEOTWReview= new Review(5, 'Wahington Post')
nyTimesGreatHuntReview = new Review(5, 'New York Times')
washingtonPostGreatHuntReview= new Review(5, 'Wahington Post')
nyTimesDragonRebornReview = new Review(5, 'New York Times')
washingtonPostDragonRebornReview= new Review(5, 'Wahington Post')
nyTimesFinalEmpireReview = new Review(5, 'New York Times')
washingtonPostFinalEmpireReview= new Review(5, 'Wahington Post')
nyTimesWellOfAscensionReview = new Review(5, 'New York Times')
washingtonPostWellOfAscensionReview= new Review(5, 'Wahington Post')
nyTimesHeroOfAgesReview = new Review(5, 'New York Times')
washingtonPostHeroOfAgesReview= new Review(5, 'Wahington Post')
//setters book reviews
theEyeOfTheWorld.addReviews(nyTimesEOTWReview)
theEyeOfTheWorld.addReviews(washingtonPostEOTWReview)
theGreatHunt.addReviews(nyTimesGreatHuntReview)
theGreatHunt.addReviews(washingtonPostGreatHuntReview)
theDragonReborn.addReviews(nyTimesDragonRebornReview)
theDragonReborn.addReviews(washingtonPostDragonRebornReview)
theFinalEmpire.addReviews(nyTimesFinalEmpireReview)
theFinalEmpire.addReviews(washingtonPostFinalEmpireReview)
theWellOfAscension.addReviews(nyTimesWellOfAscensionReview)
theWellOfAscension.addReviews(washingtonPostWellOfAscensionReview)
theHeroOfAges.addReviews(nyTimesHeroOfAgesReview)
theHeroOfAges.addReviews(washingtonPostHeroOfAgesReview)
//setters book authors
theEyeOfTheWorld.setAuthor(robertJordan)
theGreatHunt.setAuthor(robertJordan)
theDragonReborn.setAuthor(robertJordan)
theFinalEmpire.setAuthor(brandonSanderson)
theWellOfAscension.setAuthor(brandonSanderson)
theHeroOfAges.setAuthor(brandonSanderson)
//setters book publishers
theEyeOfTheWorld.setPublisher(torBooks)
theGreatHunt.setPublisher(torBooks)
theDragonReborn.setPublisher(torBooks)
theFinalEmpire.setPublisher(torBooks)
theWellOfAscension.setPublisher(torBooks)
theHeroOfAges.setPublisher(torBooks)
//setters publisher authors
torBooks.setAuthor(robertJordan)
torBooks.setAuthor(brandonSanderson)
//setters author books
robertJordan.setBooks([theEyeOfTheWorld,theGreatHunt,theDragonReborn])
brandonSanderson.setBooks([theFinalEmpire,theWellOfAscension,theHeroOfAges])
//setters bookstore
discountBooks.addBooks([theEyeOfTheWorld,theGreatHunt,theDragonReborn,theFinalEmpire,theWellOfAscension,theHeroOfAges])

//console.logs
console.log(discountBooks.getBooks())
console.log(theEyeOfTheWorld.getReviews())
console.log(robertJordan)

