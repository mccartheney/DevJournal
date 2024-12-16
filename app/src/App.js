import axios from 'axios';
import ActiveCommand from './components/commandLine/ActiveCommand';
import { useEffect, useRef, useState } from 'react';
import CommandResultList from './components/commandResults/CommandResultsList';
import Editing from './components/Editing';
import Viewing from './components/Viewing';
import Sucess from './components/commandResults/results/Sucess';
import Error from './components/commandResults/results/Error';

function App() {

  // creation of states
  const [outputsList, setOutputsList] = useState([])
  const [commandList, setCommandList] = useState([])
  const [lastCommand, setLastCommand] = useState("")
  const [actualState, setActualState] = useState("normal")
  const [mdCode, setMdCode] = useState('')
  const [mdTitle, setMdTitle] = useState('')
  const [action, setAction] = useState('')

  // ref to get the command from user
  const terminalInputRef = useRef ()


  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(mdCode);
      
      if (event.ctrlKey && event.key === 'e') {
        event.preventDefault();

        
        if (action == "view") {
          setActualState("normal")
          setMdTitle("")
          setMdCode("")
        } else if (action == "edit") {
          console.log("edit");
          
          axios.put("http://localhost:8005/api/edit", {
              journalToEdit : mdTitle,
              journalContent : mdCode
          })
            .then (response => {
              
              if (response.status == 200) setOutputsList(oldOutputList => [...oldOutputList, <Sucess sucessMessage={`The journal of the date '${mdTitle}' have been `} sucesslight={"edited sucessfully"} />])
              
            }).catch(error => {
              if (error.status == 404) setOutputsList(oldOutputList => [...oldOutputList, <Error errorMessage={`The journal of '${mdTitle}' Dont exists`} />])
              else setOutputsList(oldOutputList => [...oldOutputList, <Error errorMessage={"Internal Error"} />])
            }) 

          setActualState("normal")
          setMdTitle("")
          setMdCode("")
        }

        setAction("")
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [action, mdCode]);

  useEffect(()=>{
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  }, [outputsList])

  if (actualState == "normal") {
    return (
      <main>
        <CommandResultList terminalInputRef={terminalInputRef} setMdCode={setMdCode} mdCode={mdCode} mdTitle={mdTitle} action={action} setAction={setAction} setMdTitle={setMdTitle} setActualState={setActualState} lastCommand={lastCommand} outputsList={outputsList} commandList={commandList} setOutputList={setOutputsList}/>
        <ActiveCommand terminalInputRef={terminalInputRef} outputsList={outputsList} setCommandList={setCommandList} setLastCommand={setLastCommand} />
      </main>
    );
  }else if (actualState == "editing") {
    return <Editing mdTitle={mdTitle} mdCode={mdCode} setMdCode={setMdCode}/>
  }else if (actualState == "viewing") {
    return <Viewing mdTitle={mdTitle} mdCode={mdCode} />
  }

}

export default App;
