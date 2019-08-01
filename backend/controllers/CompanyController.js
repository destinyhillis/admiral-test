const router = require('express').Router();
const Company = require('../models/Company');

// index
router.get('/', async (req, res) => {
    try{
        const currentCompany = await Company.find();
            res.json({
                status: 200,
                data: currentCompany
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
        await Company.create(req.body);
        res.json({
            status: 200,
            data: req.body,  
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
    console.log(req.params.id, 'req.params')
    try{
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, {new: true})
        await updatedCompany.save();
        res.json({
            status: 200,
            data: updatedCompany
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
        const company = await Company.findById(req.params.id)
        res.json({
            status: 200,
            data: company
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
        const deletedCompany = await Company.findByIdAndDelete(req.params.id);
        res.json({
            status: 200,
            data: deletedCompany
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