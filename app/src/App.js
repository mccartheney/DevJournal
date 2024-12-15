import axios from 'axios';
import ActiveCommand from './components/commandLine/ActiveCommand';
import { useEffect, useRef, useState } from 'react';
import CommandResultList from './components/commandResults/CommandResultsList';

function App() {
  // creation of states
  const [outputsList, setOutputsList] = useState([])
  const [commandList, setCommandList] = useState([])
  const [lastCommand, setLastCommand] = useState("")

  // ref to get the command from user
  const terminalInputRef = useRef ()



  return (
    <main>
      <CommandResultList lastCommand={lastCommand} outputsList={outputsList} commandList={commandList} setOutputList={setOutputsList}/>
      <ActiveCommand terminalInputRef={terminalInputRef} outputsList={outputsList} setCommandList={setCommandList} setLastCommand={setLastCommand} />
    </main>
  );
}

export default App;
