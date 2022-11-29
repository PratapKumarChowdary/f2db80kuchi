const mongoose = require("mongoose") 
const villageSchema = mongoose.Schema({ 
    village_Name: {
        type: String,
        minLength: 4,
        maxLength:26
    }, 
    village_State: String, 
    village_Population: {
        type: Number,
        minLength: 3,
        maxLength: 10
    }
}) 
 
module.exports = mongoose.model("village", 
villageSchema)