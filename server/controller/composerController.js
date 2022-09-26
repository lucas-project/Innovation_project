//@desc get composer
//@route GET api/composer
//@access Private

const getComposer = (req, res)=>{
    res.status(200).json({message:'get composer'})
}

//@desc set composer
//@route POST api/composer
//@access Private

const setComposer = (req, res)=>{
    res.status(200).json({message:'set composer'})
}

//@desc Update composer
//@route Put api/composer/:id
//@access Private

const updateComposer = (req, res)=>{
    res.status(200).json({message:'update composer'})
}

//@desc delete composer
//@route DELETE api/composer/:id
//@access Private

const deleteComposer = (req, res)=>{
    res.status(200).json({message:'delete composer'})
}

module.exports = {
    getComposer,
    setComposer,
    updateComposer,
    deleteComposer,
}