//middlewares and try catch errors and many more

const express = require('express');

const app = express();



app.get('/health-checkup', function (req,res){
    const username1= req.headers.username;
    const password1= req.headers.password;
    const kidneyId= req.query.kidneyId;

    if (username1 !="saidarshan" || password1 != "password"){

        
        res.status(400).json({
            "msg": "check your inputs           "
        })
        return ;
        }

        if ( (kidneyId != 1 && kidneyId != 2) ){

            console.log(kidneyId)
            
            console.log("hiiiiiiiiiiiii")
            res.status(400).json({
                "msg": "check your inputs  hsgfkjb"
            })

            return;
            }
 
            console.log("hiiiiiiiiiiiii")

            res.json({
                msg: "you're Safe Dude!!"
            })
            


    }

   

)

app.listen(3030);