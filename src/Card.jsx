import './App.css'
import React, {useState} from 'react'
import { TASKS_API_URL } from './config/api'

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
        let url = `${TASKS_API_URL}/${task.taskId}`
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

//---Statuksen muuttamisen funktiot (painetaan arrow nappia)-------------------

// --- OIKEA ---
const rightArrowClick = async (task) => {
    let newStatus = task.status + 1

    let url = `${TASKS_API_URL}/update-status/${task.taskId}`
    const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: newStatus

    }
)
}
// --- VASEN ---
const leftArrowClick = async (task) => {
    let newStatus = task.status - 1

    let url = `${TASKS_API_URL}/update-status/${task.taskId}`
    const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: newStatus

    }
)
}

//------------ ARROW nappien tyyli -------------------

const arrowStyle = {
    background: "rgba(172, 102, 156, 0.3)", 
    color: "white", 
    borderColor: "pink",
    borderStyle: "solid",
    fontSize: "30px",
    padding: "6px 20px"
}



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
        {task.status === 1 && <button style={arrowStyle}
            onClick={() => rightArrowClick(task)}>
            {"\u2192"}
        </button>}

         {/* Keskimmäinen sarake, nuolet vasen ja oikea */}
        {task.status === 2 && 
        <>
            <button style={arrowStyle}
            onClick={() => leftArrowClick(task)}>
                {"\u2190"}
            </button>
            <button style={arrowStyle} onClick={() => rightArrowClick(task)}>
                {"\u2192"}
            </button>
        </>
        }

         {/* Oikea sarake, nuoli vasen */}
        {task.status === 3 && <button style={arrowStyle}
        onClick={() => leftArrowClick(task)}>
            {"\u2190"}
        </button>}

    </div>
    )
}

export default Card
