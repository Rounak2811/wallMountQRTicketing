import './App.css'
import Carousels from "./Components/Carousels"
import indian_railway_image from './assets/indian_railway_image.jpg';
import CRISFooter from './Components/CRISFooter';

function App() {
  return (
    <div className="app-container">
      <div className="logoPlusOrg">
        <img src={indian_railway_image} className="railwayLogo" />
        <h1 className="orgName">Metro Railway Kolkata</h1>
      </div>
      <marquee><h2 className="">Welcome to Kolkata Metro - India's First Metro </h2></marquee>
      <div>
        <Carousels />
        <button type="button" className="btn btn-primary m-2 p-2 fs-4 rounded-4">Buy Ticket</button>
      </div>
      <CRISFooter />
    </div>
  )
}

export default App
