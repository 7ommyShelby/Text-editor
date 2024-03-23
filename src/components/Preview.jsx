import React from 'react'
import { useContext } from 'react'
import { EditorContext } from '../App'

const Preview = () => {

    const { text} = useContext(EditorContext);
    //  console.log(text);

    return (
        <div className='prev'>
            <h1>Preview of your writing</h1>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Preview
