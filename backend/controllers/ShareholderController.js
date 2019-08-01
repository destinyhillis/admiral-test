const router = require('express').Router();
const Shareholder = require('../models/Shareholder');
// const Company = require('../models/Company');

// index
router.get('/', async (req, res) => {
    try{
        const shareholders = await Shareholder.find();
            res.json({
                status: 200,
                data: shareholders
            })
    } catch(err){
        res.json({
            status: 500,
            data: err
        })    }
});

// new
router.post('/', async (req, res) => {
    try {
        const newShareholder = await Shareholder.create(req.body);
        res.json({
            status: 200,
            data: newShareholder
        })

    } catch(err){
        console.log(err);
        res.json({
            status: 500,
            data: err
        })
    }
});


// edit
router.put('/:id', async (req, res) => {
    try{
        const updatedShareholder = await Shareholder.findByIdAndUpdate(req.params.id, req.body, {new: true})
        await updatedShareholder.save();
        res.json({
            status: 200,
            data: updatedShareholder
        })
    }catch(err){
        console.log(err);
        res.json({
            status: 500,
            data: err
        })    
    }
});

// show
router.get('/:id', async (req, res) => {
    try{
        const shareholder = await Shareholder.findById(req.params.id)
        res.json({
            status: 200,
            data: shareholder
        })
    }catch(err){
        console.log(err);
        res.json({
            status: 500,
            data: err
        })    
    }
});


// delete
router.delete('/:id', async (req, res) => {
    try{
        const deletedShareholder = await Shareholder.findByIdAndDelete(req.params.id);
        res.json({
            status: 200,
            data: deletedShareholder
        })

    }catch(err){
        console.log(err);
        res.json({
            status: 500,
            data: err
        })
    }
})

module.exports = router;