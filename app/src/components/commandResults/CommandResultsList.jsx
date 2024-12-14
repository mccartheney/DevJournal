import { useEffect, useRef } from "react"
import UsedCommand from "../commandLine/UsedCommand"

const CommandResultList = ({setOutputList, lastCommand, commandList, outputsList }) => {
    // ref to cehck if is the first rendes (first render should be ignored, if not will render a empty usedCommand)
    const isFirstRender = useRef(true)

    // use effect for command management
    useEffect(() => {
        // if its the first render do nothing
        if (isFirstRender.current) {
            isFirstRender.current = false
            return 
        }

        // create a useCommand component with the last command
        const commandLine = <UsedCommand commandValue={lastCommand} />
        // add the last command on outputList
        setOutputList(oldOutputList => [...oldOutputList, commandLine])
        
        // switch to manage the command made by user
        switch (lastCommand) {
            case "clear":
                // clear the outputList
                setOutputList([])
                break;
        
            default:
                // if is a command that not exists, warn it to user 
                // creating a warning and appending to the outputList
                const commandResult = <p>
                    Dont exist that command
                </p>
                setOutputList(oldOutputList => [...oldOutputList, commandResult])

                break;
        }
        
    }, [commandList]) // do this everytime the command list updates

    
    
    
    return (
        <>
            {outputsList.map((outputElement, index) => <div key={index}>{outputElement}</div>)}
        </>
    )

}

export default CommandResultList