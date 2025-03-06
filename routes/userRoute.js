const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.loadHome)
router.get('/trade', userController.loadTrade)
router.get('/nft', userController.loadNft)
router.get('/claims', userController.loadClaims)
router.get('/privacyPolicy', userController.loadPrivacyPolicy)
router.get('/about', userController.loadAbout)




module.exports = router