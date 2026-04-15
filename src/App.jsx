import './App.css'
import Laskuri from './Laskuri'
import Tasks from './Tasks'


function App() {

  return (
      <section id="center">

            <h1>Task management App</h1>

            <Tasks />

            <Laskuri otsikko="Simon laskuri" />
            <Laskuri otsikko="Yleinen laskuri" />

      </section>
  )
}

export default App
