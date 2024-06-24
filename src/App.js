import { useState } from 'react'
import trademark from './assets/trademark.png'
import ingexteriors from './assets/ingexteriors.png'
import btnhurricane from './assets/btnhurricane.png'

import './App.css';

function App() {
  const [address, setAddress] = useState("607 W Beech St")
  const [area, setArea] = useState("Oklahoma")

  const roofersList = [
    {
      "id": 0,
      "name": "Trademark Exteriors and Restoration",
      "logo": trademark,
      "financing?": true,
      "radius": [
        {
          "miles": 45,
          "location": "Oklahoma City"
        },
        {
          "miles": 45,
          "location": "Tulsa"
        },
        {
          "miles": 30,
          "location": "Lawton"
        }
      ],
      "state": "oklahoma"
    },
    {
      "id": 1,
      "name": "BTN Hurricane",
      "logo": btnhurricane,
      "financing?": true,
      "radius": [
        {
          "miles": 45,
          "location": "Palm Beach"
        }
      ],
      "state": "florida"
    },
    {
      "id": 2,
      "name": "INGExteriors",
      "logo": ingexteriors,
      "financing?": true,
      "radius": [
        {
          "miles": 45,
          "location": "Shaumberg"
        }
      ],
      "state": "illinois"
    }
  ]

  const roofersInArea = roofersList.filter((roofer) => {
    return roofer.state.includes(area.toLowerCase())
  })

  console.log(roofersInArea)

  let distance = 241224.469
  let distanceMiles = distance / 1609

  console.log(roofersInArea.length)

  return (
    <div className="App">
      <div className='nav-container'>
        <div className='nav'>
          <input name="address" type='text' placeholder='Address' onChange={(e) => {setAddress(e.target.value)}} />
          <input name="state" type='text' placeholder='State' onChange={(e) => {setArea(e.target.value)}} />
        </div>
      </div>

      <h1>Available roofers</h1>
      <ul className='roofers'>
        {roofersInArea.map((roofer) =>
          <li className='card' key={roofer.id}>
            <h3>{roofer.name}</h3>
            <div className='img-container'><img className='card-img' src={roofer.logo} alt={roofer.name} /></div>
            <div className='card-container'>
              <p>Financing? {roofer['financing?'] ? "Yes" : "No"}</p>
              <p>Radius:</p>
            </div>

            <ul>{roofer.radius.map((r, i) => 
              <li key={i}>
                <h4>{r.miles} miles from {r.location}</h4>
                <p>Distance between {address} and {r.location}: <span>{distanceMiles.toPrecision(4)} miles</span></p>
                { distanceMiles.toPrecision(4) > r.miles ? <span>Out of radius ❌</span> : <span>Qualified! ✅</span>}
              </li>)}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );

  // TO DO
  // - Geocoding for the address so we can get the coordinates and make the proper request to mapbox
  // - Migrate roofers array to database

}

export default App;
