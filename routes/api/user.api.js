// TODO: require package from npm
const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const multer = require("multer");
const passport = require("passport");
const upload = require("../../config/upload");


// TODO: require package
const {User} = require("../../models/User");
const {validateRegister} = require("../../validation/validateUser");
const {authorizing} = require("../../middleware/auth");
const {
    createUser,
    login,
    getUserInfo,
    getUserList,
    deleteAccount,
    uploadAvatar,
    updateAccount
} = require("../../controller/users.controller");


// TODO: set up package
const router = express.Router();
const secretKey = process.env.SECRET_KEY;

// ------------------ ROUTER -----------------------

// route: api/user/register
// desc: register api
// status: public
router.post('/register', validateRegister, createUser);


// route: api/user/register
// desc: register api
// status: public
router.post("/login", login);

// route: api/user/getUsersList
// desc: get user list
// status: public
router.get("/getUsersList", getUserList);


// route: api/user/test-private
// desc: test pass authentication
// status: private
router.get("/testPassport",
    passport.authenticate("jwt", {session: false}),
    authorizing("passenger"),
    (req, res) => {
        return res.status(200).json(req.user);
    }
);

// route: api/user/deleteAccount
// desc: delete user
// status: private (passenger and driver)
router.delete("/deleteAccount", 
    passport.authenticate("jwt", {session: false}),
    deleteAccount
);

// route: api/user/uploadAvatar
// desc: upload avatar
// status: private (passenger and driver)
router.post("/uploadAvatar", 
    passport.authenticate("jwt", {session: false}),
    upload.single("avatar"),
    uploadAvatar
);

router.patch("/updateAccount", 
    passport.authenticate("jwt", {session: false}),
    updateAccount
);

// route: api/user/:userId
// desc: get user info
// status: public
router.get("/:userId", getUserInfo);




module.exports = router;