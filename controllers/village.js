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
// exports.village_delete = function(req, res) { 
//     res.send('NOT IMPLEMENTED: Village delete DELETE ' + req.params.id); 
// }; 

exports.village_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Village.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
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

// for a specific Village. 
exports.village_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Village.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Costume update form on PUT. 
exports.village_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Village.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.village_Name)  
               toUpdate.village_Name = req.body.village_Name; 
        if(req.body.village_State) toUpdate.village_State = req.body.village_State; 
        if(req.body.village_Population) toUpdate.village_Population = req.body.village_Population; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.village_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Village.findById( req.query.id) 
        res.render('villagedetail',  
{ title: 'Village Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.village_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('villagecreate', { title: 'Village Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.village_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Village.findById(req.query.id) 
        res.render('villageupdate', { title: 'Village Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 