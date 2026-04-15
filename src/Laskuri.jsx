import './App.css'
import React, {useState} from 'react'

function Laskuri({otsikko}) {

    // State on "luku", "setLuku" on metodi millä lukua muutetaan.
    const [luku, setLuku] = useState(0)

     const buttonStyle = {
        padding: "15px",
        fontSize: "30px"
    }

  return (
      <div>
            <h2>{otsikko}</h2>

            <h3>{luku}</h3>

            <button style={buttonStyle} onClick={() => setLuku(luku+1)}>+</button>

      </div>
  )
}

export default Laskuri
