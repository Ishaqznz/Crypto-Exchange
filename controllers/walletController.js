const User = require('../models/userShema')
const Wallet = require('../models/walletShema')




const loadWallet = async (req, res) => {
    try {

        const userId = req.session.user
        const wallet = Wallet.findOne({ userId: userId })

        res.render('user/wallet', { wallet })
    } catch (error) {
        console.log('Error while loading the wallet page: ', error);
        res.redirect('/404')
    }
}


module.exports = {
    loadWallet
}