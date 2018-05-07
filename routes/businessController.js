const express = require('express')
const Business = require('../db/models/Business')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
    try {
        const businesses = await Business.find({})
        res.json(businesses)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        const newBusiness = await Business.create(req.body)
        res.json(newBusiness)
        console.log(newBusiness)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.delete('/:businessId', async (req, res) => {
    try {
        await Business.findByIdAndRemove(req.params.BusinessId)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.patch('/:businessId', async (req, res) => {
    try {
        const updatedBusiness = await Business.findByIdAndUpdate(req.params.businessId, req.body, { new: true })
        res.json(updatedBusiness)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router