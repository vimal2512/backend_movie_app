import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { genPassword,createUser,getUserByName} from '../helper.js'
const router = express.Router()

router.post("/signup",async(req,res)=>{
    const {username,password} = req.body
    console.log(username,password)
    const isUserExist =await getUserByName(username)
    console.log(isUserExist)
if(isUserExist){
    res.status(400).send({message:"username already taken"})
    return
}
if(!/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/g.test(
    password)
){
res.status(400).send({message:"password pattern doesn't match"})
  return  
}
    const hashedPassword=await genPassword(password)
    const result =await createUser(username,hashedPassword)
    res.send(result)
})



router.post("/login",async(req,res)=>{
    const {username,password} = req.body
    console.log(username,password)
    const userFromDb =await getUserByName(username)
    console.log(userFromDb )
if(!userFromDb ){
    res.status(400).send({message:"Invalid credentials"})
    return
}

const storedDbPassword=userFromDb.password

const isPasswordMatch =await bcrypt.compare(password,storedDbPassword)

if(!isPasswordMatch){
    res.status(400).send({message:"Invalid credentials"})
    return
}

//token

const token = jwt.sign({id:userFromDb._id},process.env.SECRET_KEY)

res.send({message:"successful login",token:token})


res.send(isPasswordMatch)

})






export const userRouter = router