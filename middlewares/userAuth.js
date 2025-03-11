
const User = require('../models/userShema')


const userAuth = async (req, res) => {
    try {

        const userId = req.session.user
        if (userId) {

            const userData = await User.findOne({ userId })
            if (!userData.isBlocked) {
                next()
                return;
            }
        } else {
            res.redirect('/login')
        }
    } catch (error) {
        
        console.log('Error while authenticating the user: ', error);
        res.redirect('/404')

    }
}

module.exports = {
    userAuth
}