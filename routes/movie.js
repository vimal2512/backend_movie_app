import express from 'express'
import { getMovieById, getMovie, deleteMovie, addMovie, editMovie } from '../helper.js'
import {auth} from '../middleware/auth.js'
const router=express.Router()



router.get("/:id",auth,async(req,res)=>{
    const{id}=req.params
    const movie=await getMovieById(id)
    res.send(movie)
})



router.get("/",auth,async(req,res)=>{
    const{language,rating}=req.query
    console.log(req.query)
   

    const movie=await getMovie(req)
    if(req.query.rating){
        req.query.rating=+req.query.rating
    }
    res.send(movie)
})

router.delete("/:id",async(req,res)=>{
    const{id}=req.params
    const movie=await deleteMovie(id)
    res.send(movie)
})

router.post("/",async(req,res)=>{
    const newMovie = req.body
    const movie=await addMovie(newMovie)
    res.send(movie)
})

router.put("/:id",async(req,res)=>{
    const{id}=req.params
    const updateMovie = req.body
    console.log(updateMovie)
    const result=await editMovie(id, updateMovie)
    res.send(result)

})


export const movieRouter = router
