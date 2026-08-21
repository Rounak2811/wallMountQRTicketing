import './App.css'
import Carousels from "./Components/Carousels"
import indian_railway_image from './assets/indian_railway_image.jpg';
import CRISFooter from './Components/CRISFooter';
import { useState } from 'react';
import TicketForm from './Components/TicketForm';


function App() {
  let [buyTicket, setBuyTicket] = useState(true);
  let handleBuyTicket = () => {
    setBuyTicket(false);
  }
  let handBackButton = () => {
    setBuyTicket(true);
  }
  return (
    <div className="app-container">
      <div className="main-content">

        <div className="logoPlusOrg">
          <img src={indian_railway_image} className="railwayLogo" />
          <h1 className="orgName colorful-blink">Metro Railway Kolkata</h1>
        </div>
        <marquee><h2 className="colorful-blink">Welcome to Kolkata Metro - India's First Metro </h2></marquee>
        {buyTicket && <div>
          <Carousels />
          <button type="button" className="btn btn-primary p-2 fs-4 rounded-4 buyTicket" onClick={handleBuyTicket}>Buy Ticket</button>
        </div>}
        {!buyTicket && <TicketForm backButton={handBackButton} />}
      </div>
      <CRISFooter />
    </div>
  )
}

export default App
