// "forEach" don't return anything, it only helps to log.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums);
//[ 5, 6, 7, 8, 9, 10 ]

// with the help of forEach
const newNums2 = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num);
  }
});
console.log(newNums2);
//[ 5, 6, 7, 8, 9, 10 ]

//example:
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => {
  return bk.genre === "History";
});
//here bk means signle object ( { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 })
console.log(userBooks);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/

const userBook2 = books.filter((eachBookObject) => {
  return eachBookObject.publish >= 1995 && eachBookObject.genre == "Science";
});
console.log(userBook2);
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/
