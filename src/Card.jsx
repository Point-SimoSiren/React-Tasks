import './App.css'
import React, {useState} from 'react'

// Card komponentti saa propsina task objektin kutsuvalta Tasks.jsx komponentilta
function Card({task}) {

//---- Poistofunktio, jota delete nappi kutsuu -------------

const poista = async (task) => {
    let vahvistus = window.confirm("Want to delete task: " + task.title + "?")
    if (vahvistus === false) {
        return
    }
    // Http delete pyyntö backendiin
    try {
        let url = "https://taskbackend20264.azurewebsites.net/api/tasks" + "/" + task.taskId
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            throw new Error("Virhe")
        }

        alert("Poisto onnistui!")

    } catch (error) {
        console.error("Virhe:", error)
        alert("Poisto epäonnistui")
    }
}

//---Poisto päättyy--------------------------------------


return(  
    <div className='kortti' key={task.taskId}>
        <button style={{background: "red", marginRight: "10px"}}
        onClick={() => poista(task)}>
            delete
        </button>


        <button style={{background: "cyan", color: "blue"}}>edit</button>

        <h5>{task.title}</h5>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
        <p>Priority: {task.priority}</p>

        {task.status === 1 && <p>Waiting</p>}
        {task.status === 2 && <p>Started at: </p>}
        {task.status === 3 && <p>Finished at: </p>}
        <p>{task.statusChanged}</p>

        {/* Vasen sarake, nuoli oikealle */}
        {task.status === 1 && <button style={{background: "green", color: "white"}}>
            {"\u2192"}
        </button>}

         {/* Keskimmäinen sarake, nuolet vasen ja oikea */}
        {task.status === 2 && 
        <>
            <button style={{background: "green", color: "white"}}>
                {"\u2190"}
            </button>
            <button style={{background: "green", color: "white"}}>
                {"\u2192"}
            </button>
        </>
        }

    </div>
    )
}

export default Card
