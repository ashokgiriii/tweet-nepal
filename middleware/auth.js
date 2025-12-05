/**
 * Middleware to check if user is logged in
 */
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

/**
 * Middleware to check if user is admin
 */
function isAdmin(req, res, next) {
    if (req.session.isAdminLoggedIn) {
        return next();
    }
    res.redirect('/adminLogin');
}

module.exports = {
    isLoggedIn,
    isAdmin
};

