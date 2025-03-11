const bcrypt = require('bcrypt')
const User = require('../models/userShema');
const { resolveInclude } = require('ejs');

const loadHome = (req, res) => {
    try {
        res.render('user/home')
    } catch (error) {
        console.log('Error while loading the home page: ',error);
        res.redirect('/404')
    }
}


const loadAbout = function (req, res) {
    try {
        res.render('user/about-us')
    } catch (error) {
        console.log('Error while loading the about page: ',error);
        res.redirect('/404')
    }
}

const loadPrivacyPolicy = (req, res) => {
    try {
        res.render('user/privacy-policy')
    } catch (error) {
        console.log('Error while loading the privacy policy: ',error);
        res.redirect('/404')
    }
}

const loadClaims = (req, res) => {
    try {
        res.render('user/claims')
    } catch (error) {
        console.log('Error while loading the claims page: ',error);
        res.redirect('/404')
    }
}

const loadNft = (req, res) => {
    try {
        res.render('user/nft')
    } catch (error) {
        console.log('Error while loading the nft page: ',error);
        res.redirect('/404')
    }
}

const loadTrade = (req, res) => {
    try {
        res.render('user/trade-risk')
    } catch (error) {
        console.log('Error while loading the trade page: ',error);
        res.redirect('/404')
    }
}

const loadSignup = async (req, res) => {
    try {
        res.render('user/signup')
    } catch (error) {
        console.log('Error while loading the signup page: ',error);
        res.redirect('/404')
    }
}

const loadLogin = async (req, res) => {
    try {
        res.render('user/login')
    } catch (error) {
        console.log('Error while loading the login page: ',error);
        res.redirect('/404')
    }
}

const loadErrorPage = async (req, res) => {
    try {
        res.render('user/404')
    } catch (error) {
        console.log('Error while loading the 404 page: ',error);
        res.redirect('/404')
    }
}


const signup = async (req, res) => {
    try {
        
        const { userName, password } = req.body

        const findUser = await User.findOne({ userName: userName })
        if (findUser) {
            res.status(400).json({ success: false, message: 'User already existed! '})
            return;
        }
        
        const hashedPass = await bcrypt.hash(password, 10)

        const user = await new User({
            userName: userName,
            password: hashedPass
        })

        await user.save()

        res.status(200).json({ success: true, message: 'Successfully account created!' })

    } catch (error) {
        
        console.log('Error while signup: ', error);
        res.redirect('/404')

    }
}

const login = async (req, res) => {
    try {
        
        const { userName, password } = req.body

        console.log('recieved body: ', req.body);

        const findUser = await User.findOne({ userName: userName })

        console.log('finded user: ', findUser);
        
        if (!findUser) {
            res.status(400).json({ success: false, message: 'User does not exist! '})
            return;
        }

        const userCheck = await bcrypt.compare(password, findUser.password)

        if (!userCheck) {
            res.status(400).json({ success: false, message: 'Incorrect Password!' })
            return;
        }

        res.status(200).json({ success: true, message: 'Successfully logged in! '})

    } catch (error) {
        console.log('Error in login page: ', error);
        res.status(500).json({ success: false, message: 'Error while login! '})
    }
}


module.exports = {
    loadAbout, 
    loadClaims,
    loadHome,
    loadNft,
    loadTrade,
    loadPrivacyPolicy,
    loadSignup,
    loadLogin,
    loadErrorPage,
    signup,
    login
}