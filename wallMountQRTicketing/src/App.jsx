import './App.css'
import Carousels from "./Components/Carousels"
import Instructions from './Components/Instructions'
import indian_railway_image from './assets/indian_railway_image.jpg';

function App() {
  return (
    <>
      <img src={indian_railway_image} className="railwayLogo" />
      <h1 className="p-2">Metro Railway Kolkata</h1>
      <marquee><h2 className="p-3">Welcome to Kolkata Metro - India's First Metro </h2></marquee>
      <Carousels />
    </>
  )
}

export default App
