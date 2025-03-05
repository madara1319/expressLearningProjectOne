const express = require('express');
const router = express.Router();

const array = [2, 4, 1, 6, 25, 1, 15, 346, 13, 63, 642, 76, 12, 6, 344, 3, 112, 5, 33, 12, 85, 77];


router.get('/', (req, res) => {
    res.json(array)
})

router.post('/', (req, res) => {
    const value = req.body;
    if (value === undefined) {
        return res.status(400).json({ error: "value is required" });
    }
    array.push(value);
    res.json({ message: "Value added", array });
})


router.put('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const { value } = req.body;
    if (isNaN(index) || index < 0 || index >= array.length || array === undefined){
        return res.status(400).json({error:"invalid index or value"});
    }
    array[index]=value;
    res.json({message:`Value at index ${index} updated`,array})
})

router.delete('/:index', (req, res) => {
    const index=parseInt(req.params.index);
    if(isNaN(index) || index<0 || index>=array.length){
        return res.status(400).json({error:"Invalid index"})
    }
    array.splice(index,1);
    res.json({message:`Value at index ${index} deleted`,array})
})

router.get('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= array.length) {
        return res.status(400).json({ error: "invalid index" });
    }
    res.json({ value: array[index] });
})


module.exports = router;
