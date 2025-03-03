const express = require('express');
const router = express.Router();

const array=[2,4,1,6,25,1,15,346,13,63,642,76,12,6,344,3,112,5,33,12,85,77];

router.get('/',(req,res)=>{
    res.send(array);
    next()
})

module.exports = router;
