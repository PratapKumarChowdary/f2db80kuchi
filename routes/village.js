var express = require('express'); 
const village_controlers= require('../controllers/village'); 
var router = express.Router(); 
 
/* GET Villages */ 
router.get('/', village_controlers.village_view_all_Page ); 
/* GET detail costume page */ 
router.get('/detail', village_controlers.village_view_one_Page); 
module.exports = router; 

