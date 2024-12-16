import { useEffect, useRef } from "react"
import UsedCommand from "../commandLine/UsedCommand"
import Help from "./results/Help"
import NoResult from "./results/NoResult"
import axios from 'axios'
import Error from "./results/Error"
import Sucess from "./results/Sucess"
import ListJournals from "./results/ListJournals"
import mdPlaceholder from "../../placeholder/mdPlaceholder"

const CommandResultList = ({ terminalInputRef,setMdCode, mdCode, mdTitle,action,setAction, setMdTitle,setActualState, setOutputList, lastCommand, commandList, outputsList }) => {
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
        switch (true) {
            case lastCommand == "new" :
                // post to create a journal
                axios.post("http://localhost:8005/api/create",{
                        initialContent : mdPlaceholder
                })
                    .then(response => {
                        const date = new Date()
                        setMdTitle(`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`)
                        setMdCode(mdPlaceholder)
                        setAction("edit")

                        setActualState("editing")
                        // warn user which the daily journal have created
                        setOutputList(oldOutputList => [...oldOutputList, <Sucess sucessMessage={"The jornal of today have been "} sucesslight={"created sucessfully"} />])
                    })
                    .catch(error => {
                        // if api send status (409) warn to user that the today journal already exists
                        if (error.status == 409) setOutputList(oldOutputList => [...oldOutputList, <Error errorMessage={"The journal of today already exists"}/>])
                        // if api send status (500) warn to user that something wrong happened on server
                        else setOutputList(oldOutputList => [...oldOutputList, <Error errorMessage={"Internal Error"} />])
                    }) 

                break;
            
            case lastCommand.startsWith("view"):
                const journalToView = lastCommand.split(" ")[1]

                axios.get('http://localhost:8005/api/view', {
                    params: { journalToView: journalToView }
                })
                    .then (response => {
                        if (response.status == 200) {
                            const { journalName, journalContent } = response.data
                            setMdTitle (journalName)
                            setMdCode (journalContent)
                            setAction ("view")
                            
                            setActualState("viewing")
                        }
                        
                    })
                    .catch (error => {
                        if (error.status == 404) setOutputList(oldOutputList => [...oldOutputList, <Error errorMessage={`Journal '${journalToView}' Not Found`} />])
                        else setOutputList(oldOutputList => [...oldOutputList, <Error errorMessage={"Internal Error"} />])

                    })

                break;
                
            case lastCommand.startsWith("edit"):
                const journalToEdit = lastCommand.split(" ")[1]
                axios.get('http://localhost:8005/api/view', {
                    params: { journalToView: journalToEdit }
                })
                    .then(response => {
                        if (response.status == 200) {
                            const { journalName, journalContent } = response.data
                            setMdTitle(journalName)
                            setMdCode(journalContent)
                            setAction("edit")

                            setActualState("editing")
                        }
                    })
                    .catch(error => {
                        if (error.status == 404) setOutputList(oldOutputList => [...oldOutputList, <Error errorMessage={`Journal '${journalToEdit}' Not Found`} />])
                        else setOutputList(oldOutputList => [...oldOutputList, <Error errorMessage={"Internal Error"} />])

                    })

                break;

            case lastCommand == "list" :
                // get to get all journals
                axios.get('http://localhost:8005/api/list')
                .then (response => {
                        // if sucess show to user all journals
                        const allJournals = response.data
                        setOutputList(oldOutputList => [...oldOutputList, <ListJournals allJournals={allJournals}/>])
                    })
                    .catch (error => {
                        // in case of error, warn it to user
                        setOutputList(oldOutputList => [...oldOutputList, <Error errorMessage={"Internal Error"} />])
                    })

                break;
            
            case lastCommand.startsWith("delete"):
                const splitedCommand = lastCommand.split(" ")
                const journalToDelete = splitedCommand[1]
            
                axios.delete('http://localhost:8005/api/delete', {
                    data: { journalToDelete: journalToDelete }
                })
                    .then(response => {
                        setOutputList(oldOutputList => [...oldOutputList, <Sucess sucessMessage={`The journal of the date '${journalToDelete}' have been `} sucesslight={"deleted sucessfully"} />])
                    })
                    .catch(error => {
                        
                        if (error.status == 404) setOutputList(oldOutputList => [...oldOutputList, <Error errorMessage={`The journal of '${journalToDelete}' Dont exists`} />])
                        else setOutputList(oldOutputList => [...oldOutputList, <Error errorMessage={"Internal Error"} />])
                    })                

                break;

            case lastCommand == "help" :
                // show all commands options
                setOutputList(oldOutputList => [...oldOutputList, <Help/>])


                break;
            case lastCommand == "clear":
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