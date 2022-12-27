import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [games, setGames] = useState([])
  const [reservedTickets, setResTics] = useState([])

  

  const gamesSampleData = [
    {
      date: '15/01/23',
      team: 'Tottenham'
    },
    {
      date: '15/01/23',
      team: 'Tottenham'
    },
  ]

  return (
    <div className="App">
      <div className="Header">Header</div>
      <div className="Body">
        <div className="dropdown">
          <select name='game' id='game-select'>
            <option value=''>--please select a game--</option>
            {gamesSampleData && gamesSampleData.map(data => {
              return <option>{data.date}: {data.team}</option>
            })}
          </select>
        </div>
        <div className="form">
          
        </div>
        <div className="comments">Comments</div>
      </div>
    </div>
  );
}

export default App;
