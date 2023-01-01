import { useEffect, useState } from 'react';
import { deleteTicketReservation, fetchMatches, fetchTicketReservations, postTicketReservation } from './api-client.js';
import './App.css';
import Header from './components/Header.js';
import IndividualMatch from './components/IndividualMatch.js';
import MatchSelect from './components/MatchSelect.js';
import NextMatches from './components/NextMatches.js';
import SetUser from './components/SetUser.js';
import { dateTransform } from './date-transformer.js';

function App() {
  const [user, setUser] = useState('Gerry')
  const [matches, setMatches] = useState([]);
  const [reservedTickets, setResTics] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState('');

  useEffect(() => {
    const getMatches = async () => {
      const data = await fetchMatches();
      const matches = dateTransform(data)
      setMatches(matches);
    };
    getMatches();
  }, []);

  useEffect(() => {
    const getReservedTickets = async () => {
      const data = await fetchTicketReservations();
      const tickets = dateTransform(data)
      setResTics(tickets);
    };
    getReservedTickets();
  }, []);

  const handleSelect = (event) => {
    if (event.target.value !== '') {
      setSelectedMatch(event.target.value);
    } else {
      setSelectedMatch('');
    }
  };

  const handleUserChange = (event) => {
    event.preventDefault()
    setUser(event.target[0].value)
  }

  const handleTicketCreate = async (event) => {
    event.preventDefault()
    const newReservation = {
      matchid: selectedMatch,
      user: user,
      numberOfTickets: Number(event.target[0].value)
    }
    const res = await postTicketReservation(newReservation)
    setResTics([...reservedTickets, res])
  }

  const handleTicketDelete = async (id) => {
    const res = await deleteTicketReservation(id)
    if (res.acknowledged === true) {
      const newReservedTickets = reservedTickets.slice().filter((ticket)=>ticket._id != id)
      setResTics(newReservedTickets)
    }
  }

  const handleTicketEdit = async (event) => {}

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="body">
        <div>
          <SetUser user={user} handleUserChange={handleUserChange} />
        </div>
        <div className="dropdown">
          <MatchSelect matches={matches} handleSelect={handleSelect} />
        </div>

        <div className="next-matches">
          {matches.length !== 0 && selectedMatch === '' && (
            <NextMatches matches={matches} />
          )}
        </div>

        <div className="individual-match">
          {matches.length !== 0 && selectedMatch !== '' && (
            <IndividualMatch
              match={
                matches.find((match) => match.matchid == selectedMatch)
              }
              // reservedTickets = {reservedTickets.filter((ticket) => ticket.matchid == selectedMatch)}
              // handleTicketSubmit = {handleTicketCreate}
              tickets = {{
                reservations: reservedTickets.filter((ticket) => ticket.matchid == selectedMatch),
                create: handleTicketCreate,
                delete: handleTicketDelete,
                edit: handleTicketEdit,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
