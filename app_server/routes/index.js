var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET home page.
 */
router.get('/', ctrlMain.index);

/*
 * GET registration page.
 */
router.get('/register', ctrlMain.get_register);

/*
 * POST registration page.
 */
router.post('/register', ctrlMain.post_register);

/*
 * GET login page.
 */
router.get('/login', ctrlMain.get_login);

/*
 * POST login page.
 */
router.post('/login', ctrlMain.post_login);

/*
 * GET logout page.
 */
router.get('/logout', ctrlMain.get_logout);

/*
 * GET protected page.
 */
router.get('/protected', ctrlMain.loggedIn, ctrlMain.get_protected);

/*
 * GET profile page.
 */
router.get('/profile', ctrlMain.loggedIn, ctrlMain.get_profile);

router.post('/profile', ctrlMain.loggedIn, ctrlMain.post_profile);


/**
 * GET assignment4 page
 */
router.get('/assignment4', ctrlMain.assignment4);

module.exports = router;