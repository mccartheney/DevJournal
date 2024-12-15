const { createJornal, listJournals } = require("../services/journalServices")

// method to create a daily jornal
const create_journal = async (req, res) => {
    // get today date to set that date as the name of the daily journal
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const journalDate = `${month}/${day}/${year}`
    
    // create journal
    await createJornal(journalDate)
        .then ((isCreated) => {
            if(isCreated) res.sendStatus(201) // created
            else if (!isCreated) res.sendStatus(409) // conflict (already exists)
            else res.sendStatus(500) // error on server
        })
}

// method to list all journals
const list_journals = async (req, res) => {
    // get all journals
    await listJournals()
        .then(allJournals => {
            res.status(200).send(allJournals) // sucess
        }) 
        .catch ((error) => {
            res.sendStatus(500) // error on server
        })
}


module.exports = {
    create_journal,
    list_journals
}