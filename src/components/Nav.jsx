import React from 'react'
import './nav.css'
import { useContext } from 'react'
import { EditorContext } from '../App'

const Nav = () => {

  const {mode, setMode} = useContext(EditorContext);

  console.log(mode);

  return (

    <>

      <div className='container'>
        <h3>Text Utils</h3>

        <div class="checkbox-wrapper-35">
          <input value="private" name="switch" id="switch" type="checkbox" className="switch" onClick={()=>{
            mode ? setMode(false) : setMode(true);
          }}/>
          <label for="switch">
            <span className="switch-x-text">Dark Mode </span>
            <span className="switch-x-toggletext">
              <span className="switch-x-unchecked"><span className="switch-x-hiddenlabel">Unchecked: </span>Off</span>
              <span className="switch-x-checked"><span className="switch-x-hiddenlabel">Checked: </span>On</span>
            </span>
          </label>
        </div>
      </div>
    </>
  )
}

export default Nav
