import './App.css'
import Laskuri from './Laskuri'
import Tasks from './Tasks'
import React from 'react'

function App() {

  // State: määrää näytetäänkö laskuri vai Task sovellus
  const [page, setPage] = React.useState("task-app")


  return (
      <section id="center">

        <button onClick={() => setPage("task-app")}>Tasks</button>
        <button onClick={() => setPage("counter")}>Counter</button>


            {page === "task-app" && 
              <Tasks />
            }

            {page === "counter" &&
              <div>
                <Laskuri otsikko="Simon laskuri" />
                <Laskuri otsikko="Yleinen laskuri" />
              </div>
            } 

      </section>
  )
}

export default App
