// const person = {
//   name: "Saidarshan",
//   age: 19,
//   isStudent: true,
//   greet: function () {
//     return `Hello, my name is ${this.name}`;
//   }
// };

// console.log(person["name"]);       // Output: "Saidarshan"
// console.log(person.age);     // Output: 19
// console.log(person.greet());

// person.car = "BMW";
// person.money = "1M";

// console.log(person)

// const library = {
//   name: "City Library",
//   books: [
//     { title: "Atomic Habits", author: "James Clear", year: 2018 },
//     { title: "Deep Work", author: "Cal Newport", year: 2016 }
//   ]
// };


// console.log(library.books[0].title); 
// console.log(library.books[1].author);

// library.books.push( {dkg : "sdlls "})
// console.log(library)


// library.books.forEach(book => {
//   console.log(`${book.title} by ${book.author} in ${book.year}` );
// });



const express = require('express');

const app = express();

//function to return to boolean  if the ages is 14
// function isOldEnough(age){
//   if (age>=14){
//     return true;
//   } 
//   else {
//     return false ;
//   }
// }

// //now middleware whice filters out content (filters out repeated functions for all routes) verification checks

// //an express app basically series of middleware function calls
// //a middleware is basically series of functions


// function isOldEnoughMiddleware(req,res,next) {
//   const age = req.query.age;

//   if (age>=14) {
//     next();
//   } else {
//     res.json({
//       msg: "sorry peeps you not allowed!!!!"
//     })
//   }
  
// }

// app.use(isOldEnoughMiddleware); // istead of putting it in every route we tend to put this middleware at top this willl only triggers endpoints below this code 

// //we dont introduce middleware at last becoz it is of no use becoz at last there are no endpoints to check
// app.get("/ride1",isOldEnoughMiddleware,(req,res)=> { //this is middleware function

//   // if(isOldEnough(req.query.age)){
//     res.json({
//       msg: "welCome to the amazing Ride!!"
//   })
//   // }
  
// })


// app.get("/ride2",isOldEnoughMiddleware,(req,res)=> {

 
//     res.json({
//       msg: "welCome to the amazing Ride!!"
//   })
  
  
// })

let i=0


app.use(function logResponse(req,res,next) {
  
  i++
  console.log(i)
   next();


}); 

app.get('/',(req,res)=>{

 
  res.json({
    msg: "helo world"
  })
}
)

//repeating same code more times 






















app.listen(3000);


