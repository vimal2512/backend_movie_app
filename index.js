// const express = require('express')
// const { MongoClient } = require('mongodb');


import express from 'express'
import{MongoClient} from 'mongodb'
import * as dotenv from 'dotenv'
import{movieRouter} from './routes/movie.js'
import{userRouter} from './routes/user.js'
import bcrypt from 'bcrypt'


dotenv.config()

const app = express()

const port = process.env.port
app.use(express.json())


//   const movies   =   [
//                           {id:1,
//                            name:"Dada",
//                            rating:8.5,
//                            summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
//                            poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
//                            trailer:"https://www.youtube.com/embed/23mMdgo0prk",
//                            language:"tamil"},

//                            {id:2,
//                             name:"remo",
//                            rating:8.7,
//                            summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
//                            poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
//                            trailer:"https://www.youtube.com/embed/GEB4qrrWIgs" ,
//                            language:"english"
//                           },
                          

//                            {id:3,
//                             name:"super deluxe",
//                            rating:7.5,
//                            summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
//                            poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
//                            trailer: "https://www.youtube.com/embed/3-Xq_Zz3nPA",
//                            language:"english"
//                           },
                           
//                            {id:4,
//                             name:"good night",
//                            rating:7.9,
//                            summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
//                            poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
//                            trailer:"https://www.youtube.com/embed/eLPePlnFoho" ,
//                            language:"english"
//                           },
                           

//                            {id:5,
//                             name:"fight club",
//                            rating:7.5,
//                            summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
//                            poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
//                            trailer:"https://www.youtube.com/embed/oQVhwMYRgFY",
//                            language:"english" },
                           
//                            {id:6,
//                             name:"mankatha",
//                            rating:9,
//                            summary:"Dada is an emotional drama about a young man dealing with becoming a parent, out of the blue, with a lot of maturity",
//                            poster:"https://th.bing.com/th?id=OIP.7l1bfGe-kAEZE_VaTGVEeAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
//                            trailer:"https://www.youtube.com/embed/vHESM8iR1JE" ,
//                            language:"tamil"
//                             }
                          
//                           ]

  
const url =process.env. MONGO_URL;
  
async function createConnection(){
    const client = new MongoClient(url);
    await client.connect();
    console.log("mongo is connected")
    return client
}

export const client = await createConnection()

app.get("/",(req,res)=>{
    res.send("hello world")
})



app.use("/movie",movieRouter)
app.use("/user",userRouter)



app.listen(port,console.log("server started on the port:",port))


