//Object of protos
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },

  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
  }
};

// //Create object
// const book1 = Object.create(bookProtos);
// book1.title = "Book1";
// book1.author = "John Doe";
// book1.year = "2015";

const book1 = Object.create(bookProtos, {
  title: { value: "Book1" },
  author: { value: "John Doe" },
  year: { value: "2015" }
});

console.log(book1);
