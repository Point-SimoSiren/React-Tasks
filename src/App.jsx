import './App.css'
import Laskuri from './Laskuri'
import Tasks from './Tasks'
import React from 'react'

function App() {

  // State: määrää näytetäänkö laskuri vai Task sovellus
  const [page, setPage] = React.useState("task-app")


  // Navigoinnin tyylit

const navStyle = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
  padding: "12px 24px",
  backgroundColor: "#222",
  color: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
  fontWeight: "500",
  padding: "8px 12px",
  borderRadius: "6px",
}

 // Return on se osuus joka palauttaa sivulle HTML koodia

  return (
      <section id="center">
        
        <div style={navStyle}>
          <a style={linkStyle} onClick={() => setPage("task-app")}>Tasks</a>
          <a style={linkStyle} onClick={() => setPage("counter")}>Counter</a>
        </div>

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
