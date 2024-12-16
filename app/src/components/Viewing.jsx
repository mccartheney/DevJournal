import { marked } from 'marked';

const Viewing =  ({mdTitle, mdCode}) => {
    return (
        <div className="viewing">
            <div className="viewing_journalName">
                <h1>
                    {mdTitle}
                </h1>
            </div>
            <div className="viewing_textAreas">
                <div className="mdStyle" dangerouslySetInnerHTML={{ __html: marked(mdCode) }} />
            </div>

            <div className="commands">
                <p>exit <span>ctr+e</span>;</p>
            </div>
        </div>
    )
}
export default Viewing