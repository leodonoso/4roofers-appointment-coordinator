import { useState } from 'react'
import './App.css';

function App() {
  const [address, setAddress] = useState("607 W Beech St")
  const [area, setArea] = useState("Oklahoma")

  const roofersList = [
    {
      "id": 0,
      "name": "Trademark",
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

  return (
    <div className="App">
      <h1>4HOMEOWNERS ROOFING AVAILABILITY</h1>
      <label htmlFor='state'>State: </label>
      <input name="state" type='text' onChange={(e) => {setArea(e.target.value)}} defaultValue={area} />
      
      <label htmlFor='address'>Address: </label>
      <input name="address" type='text' onChange={(e) => {setAddress(e.target.value)}} defaultValue={address} />
      <h2>Available roofers</h2>
      <ul>
        {roofersInArea.map((roofer) =>
          <li key={roofer.id}>
            <p>{roofer.name}</p>
            <p>Financing?: {roofer['financing?'] ? "Yes" : "No"}</p>
            <ul>Radius: {roofer.radius.map((r, i) => 
              <li key={i}>
                <p>{r.miles} miles from {r.location}</p>
                <p>Distance between {address} and {r.location}: {distanceMiles.toPrecision(4)} miles</p>
                { distanceMiles.toPrecision(4) > r.miles ? <p>Out of radius</p> : <p>Qualified!</p>}
              </li>)}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );

  // TO DO
  // - Geocoding for the address so we can get the coordinates and make the proper request to mapbox
  // - Roofers list will come from a database and will have more roofers

}

export default App;
