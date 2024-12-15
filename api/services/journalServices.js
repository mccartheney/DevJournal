const journalModel = require ("../models/journal")

const createJornal = async (journalName) =>  {
    // on return false = journal already exists
    // on return true = journal created
    // on return 2 = error on creation journal
    try {
        // search the actual journal
        const journalDontExists = await journalModel.findOne({ journalName: journalName });

        // if the today journal dont exists
        if (!journalDontExists) {
            // create todays journals
            const newJournal = new journalModel({
                journalName: journalName, 
                journalContent: "#hello"
            });
    
            await newJournal.save();
            return true
        } else {
            return false
        }
    } catch (error) {
        return 2
    }
}

const listJournals = async () => {
    // get and return all journals
    const allJournals = await journalModel.find()
    return allJournals
}

module.exports = {
    createJornal,
    listJournals
}