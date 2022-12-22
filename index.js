const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 8080
const connectDB = require('./src/configs/db')
const addresscontroller = require("./src/controllers/address.controller")


const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())


app.use('/address',addresscontroller)

app.listen(port,async()=>{
    try {
        await connectDB()
    } catch (error) {
    console.error(error)
    }
    console.log(`This is port ${port}`)
})