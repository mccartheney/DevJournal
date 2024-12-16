// component to show all possibles commands to the user
const Help = () => {
    return (
        <div className="helpCommand">
            <div className="helpCommandContent">
                <pre>
                    &emsp;&emsp;&emsp;help                         <span>Show all the commands</span>
                </pre>
                <pre>
                    &emsp;&emsp;&emsp;clear                        <span>Clear the logs</span>
                </pre>
                <pre>
                    &emsp;&emsp;&emsp;new                          <span>Create a daily Journal</span>
                </pre>
                <pre>
                    &emsp;&emsp;&emsp;list                         <span>List all Journals</span>
                </pre>
                <pre>
                    &emsp;&emsp;&emsp;view 'mm/dd/yyyy'            <span>Show the jornal of the date view 'mm/dd/yyyy'</span>
                </pre>
                <pre>
                    &emsp;&emsp;&emsp;edit 'mm/dd/yyyy'            <span>Edit the jornal of the date view 'mm/dd/yyyy'</span>
                </pre>
                <pre>
                    &emsp;&emsp;&emsp;delete 'mm/dd/yyyy'          <span>Delete the jornal of the date view 'mm/dd/yyyy'</span>
                </pre>
                <pre>
                    &emsp;&emsp;&emsp;dev                          <span>Info about the developer</span>
                </pre>
            </div>
        </div>
    )
}

export default Help