import { useEffect, useRef } from "react"
import UsedCommand from "../commandLine/UsedCommand"
import Help from "./results/Help"
import NoResult from "./results/NoResult"

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
            case "help" :
                // show all commands options
                setOutputList(oldOutputList => [...oldOutputList, <Help/>])
                break;
            case "clear":
                // clear the outputList
                setOutputList([])
                break;
        
            default:
                // if is a command that not exists, warn it to user 
                setOutputList(oldOutputList => [...oldOutputList, <NoResult/>])

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