import { marked } from 'marked';

const Editing = ({mdTitle, mdCode, setMdCode}) => {

    return (
        <div className="editing">
            <div className="editing_journalName">
                <h1>
                    {mdTitle}
                </h1>
            </div>
            <div className="editing_textAreas">
                <div className="editing_textAreas_md">
                    <h2>
                        Markdown Editor
                    </h2>
                    <textarea autoFocus value={mdCode} onChange={(e) => setMdCode(e.target.value) }></textarea>
                </div>
                <div className="editing_textAreas_html">
                    <h2>
                        Result 
                    </h2>
                    <div className="mdStyle" dangerouslySetInnerHTML={{ __html: marked(mdCode) }} />
    
                </div>
            </div>
            <div className="commands">
                <p>Save and exit <span>ctr+e</span>;</p>
            </div>
        </div>
    )
}

export default Editing