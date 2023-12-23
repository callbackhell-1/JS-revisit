// IIFE  : Immediately Invoked Function Expressions (IIFE)

//named iife
(function printName() {
  console.log("Hi User");
})();
//Hi User

// ()-> function defn, ()=-> function execution

((name) => {
  console.log(name);
})("John");
//John
