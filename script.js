
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log("Original fruits array:", fruits);

const removedFirst = fruits.shift();

console.log("After shift:", fruits);
console.log("Removed first element:", removedFirst);

fruits.unshift("Apricot");

console.log("After unshift:", fruits);

const removedLast = fruits.pop();

console.log("After pop:", fruits);
console.log("Removed last element:", removedLast);

fruits.push("Kiwi");

console.log("After push:", fruits);
const cherryIndex = fruits.indexOf("Cherry");

if (cherryIndex !== -1) {
  fruits.splice(cherryIndex, 2, "Fig", "Grape");
}

console.log("After splice:", fruits);


const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851
  }
];

console.log("Book Titles:");
books.forEach(book => {
  console.log(book.title);
});

const authors = books.map(book => book.author);

console.log("Authors Array:", authors);

const oldBooks = books.filter(book => book.year < 1950);

console.log("Books published before 1950:", oldBooks);

const foundBook = books.find(book => book.title === "1984");

console.log("Found Book:", foundBook);