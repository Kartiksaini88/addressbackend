const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 8080
mongoose.set('strictQuery', false)


module.exports  = ()=>{
    mongoose.connect('mongodb+srv://Address:address@kartik.exjuu.mongodb.net/?retryWrites=true&w=majority')
}



