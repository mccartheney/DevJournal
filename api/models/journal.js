const mongoose = require("mongoose")

// model of journal
const journalSchema = new mongoose.Schema({
    journalName : {
        type : String,
        required: true,
    },
    journalContent : {
        type : String,
        required : true
    }
})

const journalModel = mongoose.model ("devJounals", journalSchema)

module.exports = journalModel