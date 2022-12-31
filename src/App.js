import { useEffect, useState } from 'react';
import { fetchMatches } from './api-client.js';
import './App.css';
import Header from './components/Header.js';
import IndividualMatch from './components/IndividualMatch.js';
import MatchSelect from './components/MatchSelect.js';
import NextMatches from './components/NextMatches.js';

function App() {
  const [matches, setMatches] = useState([]);
  const [reservedTickets, setResTics] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState('');

  useEffect(() => {
    const getMatches = async () => {
      const matches = await fetchMatches();
      matches.map((match) => {
        const date = new Date(match.timestamp * 1000).toLocaleString('en-GB', {
          timeZone: 'Europe/London',
        });
        match.date = date;
        match.shortDate = match.date.slice(0, 10);
      });
      setMatches(matches);
    };
    getMatches();
  }, []);

  const handleSelect = () => {
    if (document.getElementById('match-select').value != '') {
      setSelectedMatch(document.getElementById('match-select').value);
    } else {
      setSelectedMatch('');
    }
  };

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="body">
        <div className="dropdown">
          <MatchSelect matches={matches} handleSelect={handleSelect} />
        </div>

        <div className="next-matches">
          {matches.length !== 0 && selectedMatch.length === 0 && (
            <NextMatches matches={matches} />
          )}
        </div>

        <div className="individual-match">
          {matches.length !== 0 && selectedMatch.length !== 0 && (
            <IndividualMatch
              match={
                matches.find((match) => match.matchid == selectedMatch)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
