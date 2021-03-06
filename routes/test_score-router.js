const express = require('express')
const ctrl = require('../controller/test_score-ctrl')


// const express = require('express')


const router = express.Router()

router.post('/create', ctrl.createm)
router.post('/max', ctrl.max)
router.put('/m/:id', ctrl.updatem)
router.delete('/m/:id', ctrl.deletem)
router.get('/m/:id', ctrl.getmmodelbyid)
router.get('/ms', ctrl.getmodels)




module.exports = router
