import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Rooms from './components/Rooms/Rooms'
import Services from './components/Services/Services'

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Rooms/>
    </>
  )
}

export default App
