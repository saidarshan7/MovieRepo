//Very Simple Task manger


const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const person = [];

app.get('/', (req, res) => {

  res.send('Hello World! Welcome to <b>TASK MANGAER</b>')

})



app.use(express.json());

app.get('/tasks', (req,res)=>{
  
    res.send(person)
})




app.post('/tasks', (req, res) => {

    

    console.log(req.body);
    let i = person.length
   
    person.push(
        {   
            id : i,
            task : req.body.name
        }
    )
   
    console.log(i)

    res.send('Got a POST request')
  })



  app.use(bodyParser.urlencoded({ extended: true }));

     

  app.delete('/tasks/:id', (req, res) => {
    
     const index = person.indexOf(person[req.params.id]);
     if (index > -1) { // only splice array when item is found
     person.splice(index, 1); // 2nd parameter means remove one item only
}
  
    res.send("Removed Your Task at"+req.params.id + "place your new task list" );
    

  })



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })