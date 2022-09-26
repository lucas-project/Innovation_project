const express = require('express')
const router = express.Router()

const {getComposer, setComposer, deleteComposer, updateComposer} = require('../controller/composerController')

// router.get('/',(req, res)=>{
//     res.status(200).json({message: 'Get composer'})
// })

// router.get('/',getComposer)
//
// router.post('/',setComposer)
router.route('/').get(getComposer).post(setComposer)

router.route('/:id').delete(deleteComposer).put(updateComposer)

module.exports = router