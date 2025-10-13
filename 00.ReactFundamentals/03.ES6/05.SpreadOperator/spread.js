const languages = ["JS", "Python", "Java"];
const morelanguages = ["C", "C++", "C#"];

const allLanguages = [...languages, ...morelanguages];

const user = {
  name: "John",
  age: 30,
  city: "New York",
};
const updatedUser = { ...user, country: "USA" };
console.log(allLanguages); // ["JS", "Python", "Java", "C", "C++", "C#"]
console.log(updatedUser); // { name: "John", age: 30, city: "New York", country: "USA" }
