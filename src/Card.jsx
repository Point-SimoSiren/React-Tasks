import './App.css'
import React, {useState} from 'react'

function Card({task}) {

return(  
    <div className='kortti' key={task.taskId}>
        <h5>{task.title}</h5>
        <p>Status: {task.status}</p>
        <p>Priority: {task.priority}</p>

        {task.status === 1 && <p>Created: </p>}
        {task.status === 2 && <p>Started: </p>}
        {task.status === 3 && <p>Finished: </p>}

        <p>{task.statusChanged}</p>
    </div>
    )
}

export default Card
