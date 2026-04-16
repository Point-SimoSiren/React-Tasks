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


//---------------------------------------------------------------------------
    // Form onSubmit kutsuu tätä funktiota kun painetaan save buttonia
    
    const tallennus = async (event) => {
    event.preventDefault() // normaaali selaimen päivitys submitissa estettään

    // Luodaan objekti joka tulee mukaan http post pyyntöön alempana
    const newTask = {
        title: newTitle,
        description: newDesc,
        priority: newPrior,
        status: 1,
    }

    // Tehdään http POST tyyppinen pyyntö backendiin, mukana datana em. newTask objekti
    try {
        const response = await fetch("https://taskbackend20264.azurewebsites.net/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask) // Pyynnön bodyyn tulee data joka on muutettu JSON muotoon
        })

        if (!response.ok) {
            throw new Error("Virhe tallennuksessa")
        }

        alert("Tallennus onnistui!")

    } catch (error) {
        console.error("Virhe:", error)
        alert("Tallennus epäonnistui")
    }
}

//---------------------------------------------------------------

return(  
    <div style={windowStyle}>
        <h5>Add new Task</h5>

        <form onSubmit={tallennus}>
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
