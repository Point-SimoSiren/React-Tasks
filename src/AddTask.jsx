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

// Statet, jotka pitää sisällään tiedon inputkenttien sisällöstä
// koko ajan. Päivittyy aina kun käyttäjä muuttaa tekstiä inputkentässä
const [newTitle, setNewTitle] = useState("")
const [newDesc, setNewDesc] = useState("")
const [newPrior, setNewPrior] = useState(3)



return(  
    <div style={windowStyle}>
        <h5>Add new Task</h5>

        <form>
            <label>Title</label>
            <input type="text" value={newTitle} placeholder='Title' onChange={({target}) => setNewTitle(target.value)} />

             <label>Description</label>
            <input type="text" value={newDesc} placeholder='Description' onChange={({target}) => setNewDesc(target.value)} />

            <label>Priority </label>
            <input type="number" value={newPrior} min={1} max={5} onChange={({target}) => setNewPrior(target.value)} />
            
            <input type="submit" value="save" />

        </form>
    </div>
    
    )
}

export default AddTask
