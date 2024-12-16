const { createJornal, listJournals, removeJournal,viewJournal, editJournal } = require("../services/journalServices")

// method to create a daily jornal
const create_journal = async (req, res) => {
    const { initialContent } = req.body
    console.log(initialContent);
    

    // get today date to set that date as the name of the daily journal
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const journalDate = `${month}/${day}/${year}`

    // create journal
    await createJornal(journalDate, initialContent)
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

const delete_journal = async (req,res) => {
    const {journalToDelete} = req.body
    if (journalToDelete) {
        try {
            const isRemoved = await removeJournal(journalToDelete)
            if (isRemoved) res.sendStatus(200)
            else res.sendStatus(404)
        } catch (error) {
            res.sendStatus (500)
        }
    }else {
        res.sendStatus(400)
    }
}

const view_Journal = async (req, res) => {
    try {
        const journalToView = req.query.journalToView; // Obtém o parâmetro da query string
        const searchJournal = await viewJournal(journalToView); // Busca o journal

        console.log(searchJournal); // Loga o resultado no servidor

        if (searchJournal) {
            const { journalName, journalContent } = searchJournal;

            // Resposta de sucesso com o journal encontrado
            return res.status(200).send({
                journalName: journalName,
                journalContent: journalContent,
            });
        } else {
            // Resposta 404 caso o journal não seja encontrado
            return res.status(404).send({ message: 'Journal not found' });
        }
    } catch (error) {
        console.error(error); // Loga o erro para depuração

        // Resposta com status 500 para erros inesperados
        return res.status(500).send({ message: 'An unexpected error occurred' });
    }
};

const edit_Journal = async (req, res) => {
    const { journalToEdit, journalContent } = req.body
    if (journalToEdit ){
        try {
            const isEdited = await editJournal(journalToEdit, journalContent)
            
            if (isEdited) res.send(200)

        } catch (error) {
            res.sendStatus(404)
        }
    }else {
        res.sendStatus(400)
    }
}

module.exports = {
    create_journal,
    list_journals,
    delete_journal,
    view_Journal,
    edit_Journal
}