import React, { useRef } from 'react'
import './home.css'
import { useContext } from 'react'
import { EditorContext } from '../App'
import Preview from './Preview'
import Summary from './Summary'
import Nav from './Nav'

const Home = () => {

  const { text, setText, mode } = useContext(EditorContext)
  const tref = useRef();


  return (
    <>
      <Nav />

      <main className={mode ? "dark" : "light"}>
        <div className='input'>
          <h1>Text Editor</h1>
          <textarea ref={tref} name="" id="" rows="10" value={text} onChange={(e) => {
            setText(e.target.value);
          }}></textarea>

          {console.log("text", tref.current)}

          <div className="controls">
            <button onClick={() => {
              let x = tref.current.value.toUpperCase();
              setText(x);
            }}>Uppercase</button>

            <button onClick={() => {
              let x = tref.current.value.toLowerCase();
              setText(x);
            }}>Lowercase</button>

            <button onClick={() => {
              tref.current.value = "";
              setText("")
            }}>Clear Text</button>

            <button onClick={() => {
              navigator.clipboard.writeText(tref.current.value);
            }}>Copy to clipboard</button>

            <button onClick={() => {
              let tr = tref.current.value.trim();
              setText(tr);
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
