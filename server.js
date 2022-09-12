const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/hello',(req,res)=> res.json({success:true}))
app.listen(4000,()=>{
    console.log('started')
})