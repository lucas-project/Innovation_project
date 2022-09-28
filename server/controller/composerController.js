const asyncHandler = require('express-async-handler')
//@desc get composer
//@route GET api/composer
//@access Private

const getComposer = asyncHandler(async (req, res)=>{
    res.status(200).json({message:'get composer'})
})

//@desc set composer
//@route POST api/composer
//@access Private

const setComposer = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Empty input")
    }
    res.status(200).json({message:'set composer'})
})

//@desc Update composer
//@route Put api/composer/:id
//@access Private

const updateComposer = asyncHandler(async (req, res)=>{
    res.status(200).json({message:'update composer'})
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