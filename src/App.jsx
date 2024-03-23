import './App.css'
import Home from './components/Home'
import { createContext, useState } from 'react'

export const EditorContext = createContext();

function App() {

const [text, setText] = useState("");
const [mode, setMode] = useState(false);


  return (
    <EditorContext.Provider value={{text, setText, mode, setMode}}>
        <Home/>
    </EditorContext.Provider>
  )
}

export default App
