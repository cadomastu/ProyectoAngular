const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    //res.send('Funcionando');
    res.json({
        status: 'Funcionando'
    });
});

module.exports = router;