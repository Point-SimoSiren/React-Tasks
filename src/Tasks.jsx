import './App.css'
import React, {useState, useEffect} from 'react'
import Card from './Card'
import AddTask from './AddTask'

function Tasks() {

    // Statet
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [adding, setAdding] = useState(false)

    // useEffect suoritetaan aina kun komponentti latautuu
    // ja silloin kun 2. parametrinä olevassa taulukossa mainittu
    // staten nimi vaihtuu
    useEffect(() => {
        fetch("https://taskbackend20264.azurewebsites.net/api/tasks")
        .then(jsonData => jsonData.json())
        .then(data => setTasks(data), setLoading(false))
    },[])

  return (
      <div className="tasks-view">
            <h2>Tasks</h2>

            {!adding && <button onClick={() => setAdding(true)}>Create task</button> }

            {adding && <AddTask /> }
            
            {loading && <h4>"Loading..."</h4>}

            {tasks && (
                <div className="tasks-columns">
                    <div className="tasks-column">
                        <h4 className="tasks-column-title">Status 1</h4>
                        {tasks.filter(t => t.status === 1).map(t => (
                            <Card key={t.taskId} task={t} />
                        ))}
                    </div>

                    <div className="tasks-column">
                        <h4 className="tasks-column-title">Status 2</h4>
                        {tasks.filter(t => t.status === 2).map(t => (
                            <Card key={t.taskId} task={t} />
                        ))}
                    </div>

                    <div className="tasks-column">
                        <h4 className="tasks-column-title">Status 3</h4>
                        {tasks.filter(t => t.status === 3).map(t => (
                            <Card key={t.taskId} task={t} />
                        ))}
                    </div>
                </div>
            )}
      </div>
  )
}

export default Tasks
