import { useRef, useState } from "react"

const ActiveCommand = ({ terminalInputRef, setLastCommand, setCommandList }) => {
    // ref to get the form where will be the command
    const formRef = useRef()

    
    const submitCommand = (event) => {
        // dont reload the page
        event.preventDefault();

        // update the command list and the lastCommand
        setCommandList(oldCommandList => [...oldCommandList, terminalInputRef.current.value])
        setLastCommand(terminalInputRef.current.value)
        
        // clean the input
        terminalInputRef.current.value = ""
    }

    return (
        <div className="activeCommand">
            <div className="activeCommand_name">
                <p>
                    Dev@Journal
                </p>
            </div>
            <div className="activeCommand_separator">
                <p>
                    :
                </p>
            </div>
            <div className="activeCommand_location">
                <p>
                    ~
                </p>
            </div>
            <div className="activeCommand_separator">
                <p>
                    $
                </p>
            </div>
            <form className="activeCommand_input" onSubmit={submitCommand}>
                <input type="text" ref={terminalInputRef}/>
                <button type="submit" style={{display:"none"}}></button>
            </form>
        </div>
    )
}

export default ActiveCommand