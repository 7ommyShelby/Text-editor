import React, { useRef } from 'react'
import './home.css'
import { useContext } from 'react'
import { EditorContext } from '../App'
import Preview from './Preview'
import Summary from './Summary'
import Nav from './Nav'

const Home = () => {

  const {dispatch, state} = useContext(EditorContext)
  const tref = useRef();


  return (
    <>
      <Nav />

      <main className={state.mode ? "dark" : "light"}>
        <div className='input'>
          <h1>Text Editor</h1>
          <textarea ref={tref} name="" id="" rows="10" value={state.text} onChange={(e) => {
            dispatch({type : 'set-text' , payload : e.target.value});
          }}></textarea>



          <div className="controls">
            <button onClick={() => {
              let x = tref.current.value.toUpperCase();
              dispatch({type : 'set-text' , payload : x});
            }}>Uppercase</button>

            <button onClick={() => {
              let x = tref.current.value.toLowerCase();
              dispatch({type : 'set-text' , payload : x});
            }}>Lowercase</button>

            <button onClick={() => {
              tref.current.value = "";
              dispatch({type : 'set-text' , payload : ""});
            }}>Clear Text</button>

            <button onClick={() => {
              navigator.clipboard.writeText(tref.current.value);
            }}>Copy to clipboard</button>

            <button onClick={() => {
              let tr = tref.current.value.trim();
              dispatch({type : 'set-text' , payload : tr});
            }}>Remove extra spaces</button>
          </div>
        </div>
        <Summary />

        <Preview />

      </main>
    </>
  )
}

export default Home
