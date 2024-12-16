const journalModel = require ("../models/journal")

const createJornal = async (journalName, initialContent) =>  {
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
                journalContent: initialContent
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

const removeJournal = async (journalName) => {
    const removedJournal = await journalModel.findOneAndDelete({ journalName: journalName })
    return removedJournal
}

const viewJournal = async(journalName) => {
    const searchedJournal = await journalModel.findOne({ journalName: journalName })
    return searchedJournal
}

const editJournal = async(journalName, updatedContent) => {
    const filter = { journalName: journalName }
    const update = { journalContent : updatedContent}

    const canEditJournal = await journalModel.findOneAndUpdate(filter, update)
    console.log(canEditJournal);
    
    if (canEditJournal) return true
    return false
}

module.exports = {
    createJornal,
    listJournals,
    removeJournal,
    viewJournal,
    editJournal
}