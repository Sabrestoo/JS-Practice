//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary as prototype
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Use magazine constructor
Magazine.prototype.constructor = Magazine;

//Instantiate magazine object
mag1 = new Magazine("mag1", "John Doe", "2018", "Jan");

console.log(mag1);
