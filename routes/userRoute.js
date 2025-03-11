const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const walletController = require('../controllers/walletController')

//404 
router.get('/404', userController.loadErrorPage)

// Side bar
router.get('/', userController.loadHome)
router.get('/refer', userController.loadTrade)
router.get('/nft', userController.loadNft)
router.get('/claims', userController.loadClaims)
router.get('/privacyPolicy', userController.loadPrivacyPolicy)
router.get('/about', userController.loadAbout)

//Account Management
router.get('/signup', userController.loadSignup)
router.get('/login', userController.loadLogin)
router.post('/signup', userController.signup)
router.post('/login', userController.login)


// wallet management
router.get('/wallet', walletController.loadWallet)


module.exports = router