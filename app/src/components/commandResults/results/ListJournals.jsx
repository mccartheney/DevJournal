// component to list all journals

const ListJournals = (({allJournals}) => {
    return (
        <div className="journals">
            {allJournals.map ((journal) => {
                return (
                    <div key={journal._id} className="journals_journal">
                        <div className="journals_journal_title">
                            <h1>
                                {journal.journalName}
                            </h1>
                        </div>
                        <div className="journals_journal_content">
                            <pre>
                                {journal.journalContent}
                            </pre>
                        </div>
                    </div>
                )
            })}
        </div>
    )
})

export default ListJournals