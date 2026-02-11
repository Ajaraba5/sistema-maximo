// roleMiddleware.js

// Middleware to check user roles
module.exports = function (req, res, next) {
    const userRole = req.user.role; // Assuming user's role is stored in req.user.role

    if (userRole === 'admin' || userRole === 'contador') {
        next(); // User is authorized
    } else {
        res.status(403).send('Access denied.'); // User is not authorized
    }
};
