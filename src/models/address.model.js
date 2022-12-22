
const express = require('express')
const mongoose = require('mongoose')



const addressSchema = mongoose.Schema({
    name:{type:String,required:true},
    contact:{type:Number,required:true,unique:true},
    country:{type:String,required:true},
    city:{type:String,required:true},
    email:{type:String,required:true},
    state:{type:String,required:true},
    postal:{type:Number,required:true},

},{
    versionKey:false,
    timestamps:true,
})

module.exports =  mongoose.model('address',addressSchema)
