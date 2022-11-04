var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var village_controller = require('../controllers/village'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// VILLAGE ROUTES /// 
 
// POST request for creating a Village.  
router.post('/villages', village_controller.village_create_post); 
 
// DELETE request to delete Village. 
router.delete('/villages/:id', village_controller.village_delete); 
 
// PUT request to update Village. 
router.put('/villages/:id', village_controller.village_update_put); 
 
// GET request for one Village. 
router.get('/villages/:id', village_controller.village_detail); 
 
// GET request for list of all Village items. 
router.get('/villages', village_controller.village_list); 
 
module.exports = router; 