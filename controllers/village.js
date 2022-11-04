var Village = require('../models/village'); 
 
// List of all Villages 
exports.village_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Village list'); 
}; 
 
// for a specific Village. 
exports.village_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Village detail: ' + req.params.id); 
}; 
 
// Handle Village create on POST. 
exports.village_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Village create POST'); 
}; 
 
// Handle Village delete form on DELETE. 
exports.village_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Village delete DELETE ' + req.params.id); 
}; 
 
// Handle Village update form on PUT. 
exports.village_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Village update PUT' + req.params.id); 
}; 

exports.village_list = async function(req, res) { 
    try{ 
        theVillages = await Village.find(); 
        res.send(theVillages); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 