import './App.css'
import React, {useState} from 'react'

function AddTask() {

// tyylimääritys
const windowStyle = {
    maxWidth: "30%",
    marginBottom: "5%",
    marginLeft: "35%",
    padding: "20px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "black",
    borderRadius: "15px",
    textAlign: "left"
}

return(  
    <div style={windowStyle}>
        <h5>Add new Task</h5>


        <form>
            <label>Title</label>
            <input type="text" placeholder='Title' />

             <label>Description</label>
            <input type="text" placeholder='Description' />

            <label>Priority </label>
            <input type="number" min={1} max={5} />
            
            <input type="submit" value="save" />

        </form>
    </div>
    
    )
}

export default AddTask
