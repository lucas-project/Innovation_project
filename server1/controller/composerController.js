const asyncHandler = require('express-async-handler')
const composer = require('../models/composer')
//@desc get composer
//@route GET api/composer
//@access Private

const getComposer = asyncHandler(async (req, res)=>{
    const composers = await composer.find()
    res.status(200).json(composers)
})

//@desc set composer
//@route POST api/composer
//@access Private

const setComposer = asyncHandler(async (req, res)=>{
    res.status(200).json({message:'set composer'})
})

//@desc Update composer
//@route Put api/composer/:id
//@access Private

const updateComposer = asyncHandler(async (req, res)=>{
    // res.status(200).json({message:'update composer'})
    const composer = await composer.findById(req.params.id)

    if (!composer){}
    res.status(400)
    throw new Error("Composer not found")


})

//@desc delete composer
//@route DELETE api/composer/:id
//@access Private

const deleteComposer = asyncHandler(async (req, res)=>{
    res.status(200).json({message:'delete composer'})
})

module.exports = {
    getComposer,
    setComposer,
    updateComposer,
    deleteComposer,
}