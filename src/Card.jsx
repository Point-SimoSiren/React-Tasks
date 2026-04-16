import './App.css'
import React, {useState} from 'react'

// Card komponentti saa propsina task objektin kutsuvalta Tasks.jsx komponentilta
function Card({task}) {

return(  
    <div className='kortti' key={task.taskId}>
        <button style={{background: "red"}}>delete</button>
        <button style={{background: "cyan", color: "blue"}}>edit</button>

        <h5>{task.title}</h5>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
        <p>Priority: {task.priority}</p>

        {task.status === 1 && <p>Waiting</p>}
        {task.status === 2 && <p>Started at: </p>}
        {task.status === 3 && <p>Finished at: </p>}

        <p>{task.statusChanged}</p>
    </div>
    )
}

export default Card
