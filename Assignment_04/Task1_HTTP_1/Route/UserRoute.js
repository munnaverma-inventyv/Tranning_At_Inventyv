const express = require('express')

// Import Controller
const Controllers = require('../Controllers/userController')
// Router
// console.log(Controllers.ReadUser());
const router = express.Router();
router.route('/get').get(Controllers.ReadUser);
router.route('/post').post(Controllers.createNewUser);


module.exports = router;
   