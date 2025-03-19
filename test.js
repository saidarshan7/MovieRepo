// // const person = {
// //   name: "Saidarshan",
// //   age: 19,
// //   isStudent: true,
// //   greet: function () {
// //     return `Hello, my name is ${this.name}`;
// //   }
// // };

// // console.log(person["name"]);       // Output: "Saidarshan"
// // console.log(person.age);     // Output: 19
// // console.log(person.greet());

// // person.car = "BMW";
// // person.money = "1M";

// // console.log(person)

// // const library = {
// //   name: "City Library",
// //   books: [
// //     { title: "Atomic Habits", author: "James Clear", year: 2018 },
// //     { title: "Deep Work", author: "Cal Newport", year: 2016 }
// //   ]
// // };


// // console.log(library.books[0].title); 
// // console.log(library.books[1].author);

// // library.books.push( {dkg : "sdlls "})
// // console.log(library)


// // library.books.forEach(book => {
// //   console.log(`${book.title} by ${book.author} in ${book.year}` );
// // });



// const express = require('express');

// const app = express();

// //function to return to boolean  if the ages is 14
// // function isOldEnough(age){
// //   if (age>=14){
// //     return true;
// //   } 
// //   else {
// //     return false ;
// //   }
// // }

// // //now middleware whice filters out content (filters out repeated functions for all routes) verification checks

// // //an express app basically series of middleware function calls
// // //a middleware is basically series of functions


// // function isOldEnoughMiddleware(req,res,next) {
// //   const age = req.query.age;

// //   if (age>=14) {
// //     next();
// //   } else {
// //     res.json({
// //       msg: "sorry peeps you not allowed!!!!"
// //     })
// //   }
  
// // }

// // app.use(isOldEnoughMiddleware); // istead of putting it in every route we tend to put this middleware at top this willl only triggers endpoints below this code 

// // //we dont introduce middleware at last becoz it is of no use becoz at last there are no endpoints to check
// // app.get("/ride1",isOldEnoughMiddleware,(req,res)=> { //this is middleware function

// //   // if(isOldEnough(req.query.age)){
// //     res.json({
// //       msg: "welCome to the amazing Ride!!"
// //   })
// //   // }
  
// // })


// // app.get("/ride2",isOldEnoughMiddleware,(req,res)=> {

 
// //     res.json({
// //       msg: "welCome to the amazing Ride!!"
// //   })
  
  
// // })

// // let i=0


// // app.use(function logResponse(req,res,next) {
  
// //   i++
// //   console.log(i)
// //    next();


// // }); 

// // app.get('/',(req,res)=>{

 
// //   res.json({
// //     msg: "helo world"
// //   })
// // }
// // )

// app.use((req,res,next)=>{
  
// })
// //repeating same code more times 



// const express = require('express')

// const app= express();

// const jwt = require("jsonwebtoken");
// const secrete = '123123';


// const users = [
//     { 
//       username: "user1", 
//       password: "123123" 
//     },
//     { 
//       username: "user2", 
//       password: "456456" 
//     },
//     { 
//       username: "user3", 
//       password: "789789" 
//     },
//     {
//       username: "user4", 
//       password: "111222" 
//     },
//     { 
//       username: "user5", 
//       password: "333444" 
//     }
//   ];
  
 
// const token = jwt.sign(users[0],"secret")
// console.log(token )

// const verify = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwicGFzc3dvcmQiOiIxMjMxMjMiLCJpYXQiOjE3NDIzNjQzMTF9.AdOf6MREfaQbYRuj0ZM6AA-culibOZbxGfsyqtxfyas', "secret")
// console.log('\n\n\n')

// console.log(verify)
//the main thing here is the secrete key you used to encode the the object
  
//this token has been generated using this secrete, and hence this token can only be verified using this secrete

// if you create any variation of this object with diff secret key you ngmi



// function getLength(name){
//     return name.length ;
// }

// console.log('\n\n\n')
// const ans = getLength("saidarshan")

// console.log(ans)   

 



//try and catch error(throwing ans catching error)

//when an exception is raised the process exits since the JS program ddoesn't want to proceed anymore


// function getLength(name){
//     return name.length ;
// }

// console.log('\n\n\n')
// const ans = getLength()

// console.log(ans)  

//if you know when some fi=unction is going to throw an error then you use try catch handling

// console.log("hello there")  //control never reaches here anymore

//now using try and catch

// try {
//     function getLength(name){
//         return name.length ;
//     }
    
//     console.log('\n\n\n')
//     const ans = getLength()
    
//     console.log(ans) 
// } catch (error) {
//     console.log("error handled dude!!!!")
// }


// //below code always runs even the errror occurs

// console.log("helo againnnnnnnnnnnnnnnn")

const express= require('express');
const app = express();
const jwt = require('jsonwebtoken');
const secret = '123123';



app.use(express.urlencoded({ extended: true }))

function validate(req,res,next) {
    console.log(req.query.user)
    console.log(req.query.pass)
    let username = req.query.user;
    let pass = req.query.pass;

    // console.log(username)
    // console.log(pass)
    
    for (var i = 0; i < username.length; i++) {
  
        if(username[i]=="@"){
          
          username = username.slice(i);
          console.log(username)
          break;
        }
        // else{
        //     res.json({
        //         msg: "you have entered invalid emaildude"
        //     })
        // }
      }


      console.log(pass.length)

    if (pass.length > 6 && username=="@gmail.com"){
         
        console.log(pass.length)
        next();
    }
    else {
        res.json({
            msg: "pllease check again"
        })
    }
}

app.use(validate);

app.get('/',(req,res)=> {
    let username = req.query.user;
    let pass = req.query.pass;
 
    const token = jwt.sign(username,secret);

    res.json({
        msg :token
    })


})

const port = '3000';
app.listen('3000',(error,data)=>{
    console.log("listening")
   
})



















// app.listen(3000);


