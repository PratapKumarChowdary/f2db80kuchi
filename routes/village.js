var express = require('express'); 
const village_controlers= require('../controllers/village'); 
var router = express.Router(); 
 
/* GET Villages */ 
router.get('/', village_controlers.village_view_all_Page ); 
/* GET detail costume page */ 
router.get('/detail', village_controlers.village_view_one_Page); 
/* GET create costume page */ 
router.get('/create', village_controlers.village_create_Page); 
/* GET create update page */ 
router.get('/update', village_controlers.village_update_Page); 
/* GET delete village page */ 
router.get('/delete', village_controlers.village_delete_Page); 
module.exports = router; 

