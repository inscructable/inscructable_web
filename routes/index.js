const path = require('path');
const config = require('../config');
const router = require('express').Router();
const JwtValidator = require('../util/JwtValidator.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

/**
 * <b> Get Home Page </b>
 */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

/**
 * <b> Get Admin Page </b>
 */
router.get('/admin', authMiddleware.checkUser, function(req, res, next) {
    if (req.token.permission_level >= 9999) {
        res.sendFile(path.join(__dirname, '..', 'dist', 'admin.html'));
    } else {
        res.redirect('/');
    }
});

/**
 * <b> Get Level Page </b>
 */
router.get('/level', function(req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'dist', 'level.html'));
});

/**
 * <b> Get Level Detail Page </b>
 */
 router.get('/level/:level/:page', function(req, res, next) {
    if (!isNaN(parseFloat(req.params.level)) && isFinite(req.params.level)) {
        var lv = parseInt(req.params.level);
        var pg = parseInt(req.params.page);
        if (lv >= 0 && lv <= 30 && pg >= 0) res.sendFile(path.join(__dirname, '..', 'dist', 'level_detail.html'));
        else next();
    } else next();
});

module.exports = router;
