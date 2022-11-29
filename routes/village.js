var express = require('express'); 
const village_controlers= require('../controllers/village'); 
var router = express.Router(); 

// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET Villages */ 
router.get('/', village_controlers.village_view_all_Page ); 
/* GET detail costume page */ 
router.get('/detail', village_controlers.village_view_one_Page); 
/* GET create costume page */ 
router.get('/create', secured,village_controlers.village_create_Page); 
/* GET create update page */ 
router.get('/update',secured, village_controlers.village_update_Page); 
/* GET delete village page */ 
router.get('/delete', secured,village_controlers.village_delete_Page); 


module.exports = router; 

