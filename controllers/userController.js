

const loadHome = (req, res) => {
    res.render('user/home')
}


const loadAbout = function (req, res) {
    res.render('user/about-us')
}

const loadPrivacyPolicy = (req, res) => {
    res.render('user/privacy-policy')
}

const loadClaims = (req, res) => {
    res.render('user/claims')
}

const loadNft = (req, res) => {
    res.render('user/nft')
}

const loadTrade = (req, res) => {
    res.render('user/trade-risk')
}

module.exports = {
    loadAbout, 
    loadClaims,
    loadHome,
    loadNft,
    loadTrade,
    loadPrivacyPolicy
}