import { useState } from 'react'
import './App.css';

function App() {
  const [address, setAddress] = useState("607 W Beech St")

  const roofersList = [
    {
      "id": 0,
      "name": "Trademark",
      "financing?": true,
      "radiusMiles": 40,
      "radiusLocation": "Oklahoma City",
      "state": "Oklahoma"
    }
  ]

  let distance = 241224.469
  let distanceMiles = distance / 1609

  return (
    <div className="App">
      <h1>4HOMEOWNERS ROOFING AVAILABILITY</h1>
      <input type='text' onChange={(e) => {setAddress(e.target.value)}} defaultValue={address} />
      <button>Find a roofer</button>
      {/* Click button and get response from mapbox, get distance out of response in meters */}
      <p>Distance from {address} and Oklahoma City: {distanceMiles.toPrecision(4)} miles</p>
      { distanceMiles.toPrecision(4) > roofersList[0].radiusMiles ? <p>Out of trademark radius</p> : <p>Qualified!</p>}
    </div>
  );

  // TO DO
  // - Geocoding for the address so we can get the coordinates and make the proper request to mapbox
  // - Roofers list will come from a database and will have more roofers

}

export default App;
