import React, { useContext } from 'react'
import { EditorContext } from '../App'
import './sum.css'

const Summary = () => {

    const { text } = useContext(EditorContext);
    let trim = text.trim();
    let arr = trim.split(" ");


    return (
        <div className='summary'>
            <h1>Summary of your Writtings</h1>
            <div>
                <h3>Number of words</h3> :
                <p>{arr.length - 1}</p>
            </div>
            <div>
                <h3>Number of Characters</h3> :
                <p>{text.length}</p>
            </div>

        </div>
    )
}

export default Summary
