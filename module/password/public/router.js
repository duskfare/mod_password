var Partials = require('./../../../framework.js').handlebars.partials;
var express = require('express');
var router = express.Router();
router.use('/static', express.static(__dirname + '/static'));
router.get('/app', (req, res) => {
    res.render('modules/password/index', Partials.default);
});
module.exports = router;