import './App.css'
import About from './components/About/About'
import Amenities from './components/Amenities/Amenities'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Rooms from './components/Rooms/Rooms'
import Services from './components/Services/Services'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Rooms/>
      <Amenities/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
