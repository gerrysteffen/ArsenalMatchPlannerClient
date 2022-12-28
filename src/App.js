import { useEffect, useState } from "react";
import { fetchMatches } from "./api-client";
import "./App.css";

function App() {
  const [matches, setMatches] = useState([])
  const [reservedTickets, setResTics] = useState([])

  useEffect(()=> {
    const getMatches = async () => {
      const matches =  await fetchMatches()
      matches.map(match => {
        const date = new Date(match.timestamp*1000).toLocaleString('en-GB', {timeZone: 'Europe/London'})
        match.date = date
        match.shortDate = match.date.slice(0,10)
      })
      console.log(matches)
      setMatches(matches)
    }
    getMatches()
  },[])

  return (
    <div className="App">
      <div className="Header">Header</div>
      <div className="Body">
        <div className="dropdown">
          <select name='match' id='match-select'>
            <option value=''>--please select a game--</option>
            {matches.length > 0 && matches.map(data => {
              return <option>{data.shortDate} - {data.tournament}, round {data.round}: <strong>{data.homeTeamShort} vs. {data.awayTeamShort}</strong></option>
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
