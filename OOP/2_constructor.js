//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  //Method of constructor
  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

//Instantiate an Object
const book1 = new Book("Book one", "John Doe", "2013");
const book2 = new Book("Book Two", "Jane Doe", "2016");

console.log(book2);
