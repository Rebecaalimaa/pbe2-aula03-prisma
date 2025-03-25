const express =  require('express');
const router = express.Router();

router.get('/',(req, res)=> {
    res.json({título:'SNOOPY PetShop API'});
});

module.exports = router;