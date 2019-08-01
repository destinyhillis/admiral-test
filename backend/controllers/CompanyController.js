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


// // edit
// router.put('/:id', async (req, res) => {
//     let id = req.body.editBoardId;
//     try{
//         const updatedBoard = await Board.findByIdAndUpdate(id || req.body._id, req.body, {new: true})
//         await updatedBoard.save();
//         res.json({
//             status: 200,
//             data: updatedBoard
//         })
//     }catch(err){
//         console.log(err);
//         res.json({
//             status: 500,
//             data: err
//         })    
//     }
// });

// // show
// router.get('/:id', async (req, res) => {
//     try{
//         const board = await Board.findById(req.params.id)
//         res.json({
//             status: 200,
//             data: board
//         })
//     }catch(err){
//         console.log(err);
//         res.json({
//             status: 500,
//             data: err
//         })    
//     }
// });


// // delete
// router.delete('/:id', async (req, res) => {
//     try{
//         const deletedBoard = await Board.findByIdAndDelete(req.params.id);
//         const foundUser = await User.findOne({ boards: req.params.id });
//         foundUser.boards.remove(req.params.id);
//         await foundUser.save();


//         res.json({
//             status: 200,
//             data: deletedBoard
//         })

//     }catch(err){
//         console.log(err);
//         res.json({
//             status: 500,
//             data: err
//         })
//     }
// })

module.exports = router;