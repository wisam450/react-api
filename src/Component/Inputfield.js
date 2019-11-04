import React from 'react'
import '../App.css'
export default function Inputfield(props) {
    return(
        <div className="App"> 
            <input type="text" onChange={props.change}/>
            <button onClick={props.click}>Search</button>
        </div>
    )

}
