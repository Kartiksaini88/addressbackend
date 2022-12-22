const { Router } = require('express')
const express = require('express')
const Address = require('../models/address.model')
const router = express.Router()


router.get('', async(req,res)=>{
    try {
        let data = await Address.find({}).lean().exec()
        return res.status(201).send({data})
    } catch (error) {
        res.status(401).send({error:error.message})
    }
})


router.post('',async(req,res)=>{
    try {
        let data = await Address.create(req.body)
        return res.status(201).send({data})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})


router.delete('/:id',async(req,res)=>{
    try {
        let data = await Address.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send({data})
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
})

router.patch("/:id",async(req,res)=>{
    try {
        let data = await Address.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({data})
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
})

module.exports = router
