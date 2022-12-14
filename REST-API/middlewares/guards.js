function hasUser() {
    return (req, res, next) => {
        console.log(req.user, 'logged from guard');
        if (req.user) {
            next();
        } else {
            res.status(401).json({ message: 'Log in is required!' });
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (req.user == undefined) {
            next();
        } else {
            res.status(400).json({ message: 'You are already logged in!' });
        }
    };
}

module.exports = {
    hasUser,
    isGuest
}