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
exports.village_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Village(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.village_Name = req.body.village_Name; 
    document.village_State = req.body.village_State; 
    document.village_Population = req.body.village_Population; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// exports.village_create_post = function(req, res) { 
//     res.send('NOT IMPLEMENTED: Village create POST'); 
// }; 
 
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

// VIEWS 
// Handle a show all view 
exports.village_view_all_Page = async function(req, res) { 
    try{ 
        theVillages = await Village.find(); 
        res.render('village', { title: 'village Search Results', results: theVillages }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 