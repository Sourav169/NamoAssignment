const router = require('express').Router()
const mongoose = require('mongoose')
const User = require('../model/userModel')

router.post('/creditcard', async (req, res) => {
    try {
        const { amount, currency, type, card } = req.body;
        //console.log(amount)
        if (!amount || !currency || !type || !card) {
            return res.status(400).json({ message: "fill all the field" })
        }
        const newuser = new User({
            amount,
            currency,
            type,
            card

        })
        await newuser.save()
        .then(() => {
            res.json({
                message: {
                    "amount": amount,
                    "currency": currency,
                    "type": type,
                    "card":{
                       "number":card.number
                    },
                    "status": "success",
                    "authorization_code": "SDSD23232333"
                }
            })
        }).catch((err) => {
            res.json(err)
        })


    } catch (err) {
        res.status(500).json(err);
    }
})
router.post('/debitcard', async (req, res) => {
    try {
        const { amount, currency, type, card } = req.body;
        //console.log(amount)
        if (!amount || !currency || !type || !card) {
            return res.status(400).json({ message: "fill all the field" })
        }
        const newuser = new User({
            amount,
            currency,
            type,
            card

        })
        await newuser.save()
            .then(() => {
                res.json({
                    message: {
                        "amount": amount,
                        "currency": currency,
                        "type": type,
                        "card":{
                           "number":card.number
                        },
                        "status": "success",
                        "authorization_code": "SDSD23232333"
                    }
                })
            }).catch((err) => {
                res.json(err)
            })






    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router