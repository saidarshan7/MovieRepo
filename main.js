// //Very Simple Task manger


const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

// const person = [];

// app.get('/', (req, res) => {

//   res.send('Hello World! Welcome to <b>TASK MANGAER</b>')

// })



// app.use(express.json());

// app.get('/tasks', (req,res)=>{
  
//     res.send(person)
// })




// app.post('/tasks', (req, res) => {

    

//     console.log(req.body);
//     let i = person.length
   
//     person.push(
//         {   
//             id : i,
//             task : req.body.name
//         }
//     )
   
//     console.log(i)

//     res.send('Got a POST request')
//   })



//   app.use(bodyParser.urlencoded({ extended: true }));

     

//   app.delete('/tasks/:id', (req, res) => {
    
//      const index = person.indexOf(person[req.params.id]);
//      if (index > -1) { // only splice array when item is found
//      person.splice(index, 1); // 2nd parameter means remove one item only
// }
  
//     res.send("Removed Your Task at"+req.params.id + "place your new task list" );
    

//   })






// var users = [
//     {
//       name: "John",
//       pets: [
//         { type: "Dog", age: 3 },
//         { type: "Cat", age: 2 }
//       ]
//     },
//     {
//       name: "Alice",
//       pets: [
//         { type: "Rabbit", age: 1 },
//         { type: "Parrot", age: 4 }
//       ]
//     },
//     {
//       name: "Bob",
//       pets: [
//         { type: "Fish", age: 1 },
//         { type: "Turtle", age: 5 }
//       ]
//     },
//     {
//       name: "Eve",
//       pets: [
//         { type: "Hamster", age: 2 },
//         { type: "Dog", age: 6 }
//       ]
//     },
//     {
//       name: "Charlie",
//       pets: [
//         { type: "Cat", age: 3 },
//         { type: "Rabbit", age: 2 }
//       ]
//     }
//   ];

  const cors = require("cors");
  app.use(cors({
    origin: "http://127.0.0.1:5500", // Restrict to this origin
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  }));
  
  
  
  
  
  app.get('/',(req,res)=> {
     const a = parseInt(req.query.a)
     const b = parseInt(req.query.b)
     const sum = a+ b;
     res.json({
      md:sum
     })

  })

  app.get('/SIC',(req,res)=>{
    const p =  parseInt(req.query.p);
    const r = parseInt(req.query.r);
    const t = parseInt(req.query.t);

    const SI = (p*r*t)/100;

    res.json({
      d : SI
    })
  })

  app.get('/edit',(req,res)=>{
   users.push(
      

   )

   console.log( req.query )
   res.send("<h1>ok<h1>")
  })
  




app.listen(3000);