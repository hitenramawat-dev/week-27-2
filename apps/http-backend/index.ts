import { client } from '@repo/db/client'
import express from 'express'

const app = express()

app.use(express.json())

app.get('/user',async(req,res) => {
    try {
        await client.user.findMany()
        .then(user => res.json(user))
        .catch(e => console.log(e))
    } catch (error) {
        res.status(401).json({
            error
        })
    }
})


app.post("/user",async(req,res) => {
    try {
        const {username,password} = req.body
        const user = await client.user.create({
            data: {
                username,
                password,
            },
        });        
    

    res.status(200).json({
        user
    })
    } catch (error) {
        res.status(401).json({
            error
        })
        console.log(error);
        
    }
})


app.listen(8080,() => {
    console.log('we Running');
})