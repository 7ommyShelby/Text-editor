import './App.css'
import Home from './components/Home'
import { createContext, useReducer, useState } from 'react'
import Example from './components/Example';




export const EditorContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-text':
      return { ...state, text: action.payload };
    case 'set-mode':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}

function App() {

  const initial = {
    mode: false,
    text: ""
  }


  const [state, dispatch] = useReducer(reducer, initial)

  // const [text, setText] = useState("");
  // const [mode, setMode] = useState(false);


  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      <Home />
      {/* <Example></Example> */}
    </EditorContext.Provider>
  )
}

export default App
