/* objects*/
const book = {
  title: "The Great Adventure",
  author: {
    name: "John Doe",
    age: 45,
  },
  pages: 350,
  isPublished: true,
};
console.log(book.title);

/*Access and Log the title and author of the book object*/
console.log(book.author);
console.log(book.title);

/*Access and log the name of the author*/
console.log(book.author.name);

/*Arrays*/
const colors = ["Blue", "Green", "Yellow", "Red", "Purple"];

/*Log the entire array to the console*/
console.log(colors);

/*Access and log the first, third, and last colors from the colors array*/
console.log(colors[0]);
console.log(colors[2]);
console.log(colors[4]);

/*create an array called library*/
const library = [
  {
    title: "Journey to the Unknown",
    author: { name: "Alice Smith", age: 38 },
    pages: 200,
    isPublished: false,
  },
  {
    title: "Secrets of the Cosmos",
    author: { name: "Brian Wilson", age: 50 },
    pages: 450,
    isPublished: true,
  },
  {
    title: "Mysteries of the Mind",
    author: { name: "Catherine Lee", age: 42 },
    pages: 320,
    isPublished: true,
  },
];

/*Log the title of the second book in the library array*/
console.log(library.title);

/*Log the author of the third book in the library array*/
console.log(library["2"].author);

console.log(colors[4]);

function sayHello() {
  console.log("Hello");
}

console.log(sayHello);
