const mongoose = require("mongoose") 
const villageSchema = mongoose.Schema({ 
    village_Name: String, 
    village_State: String, 
    village_Population: Number 
}) 
 
module.exports = mongoose.model("village", 
villageSchema)