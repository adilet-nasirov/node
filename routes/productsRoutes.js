const express = require('express');
const router= express.Router();

// get all products
router.get('/',(req,res,next)=>{
    res.status(200).send('Hellooo world')
})
// find a product
router.get('/:id', (req,res,next)=>{
    res.status(200).send(`I've found an id ${req.params.id}`)
})

// create a product
router.put('/', (req,res,next)=>{
    res.status(201).send(`new product was created`)
})
// delete a product
router.delete('/', (req,res,next)=>{
    res.status(200).send('It was deleted')
})

// modify a product

router.patch('/', (req,res,next)=>{
    res.send('It was modified')
})

module.exports = router;