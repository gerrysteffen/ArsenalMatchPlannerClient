import { useEffect, useState } from 'react';
import {
  deleteTicketReservation,
  editTicketReservation,
  fetchMatches,
  fetchTicketReservations,
  postTicketReservation,
} from './api-client.js';
import './App.css';
import Header from './components/Header.js';
import IndividualMatch from './components/IndividualMatch.js';
import MatchSelect from './components/MatchSelect.js';
import NextMatches from './components/NextMatches.js';
import SetUser from './components/SetUser.js';
import { dateTransform } from './date-transformer.js';

function App() {
  const [user, setUser] = useState('Gerry');
  const [matches, setMatches] = useState([]);
  const [reservedTickets, setResTics] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState('');

  useEffect(() => {
    const getMatches = async () => {
      const data = await fetchMatches();
      data.forEach((match) => {
        match.timestamp = dateTransform(match.timestamp)
      })
      setMatches(data);
    };
    getMatches();
  }, []);

  useEffect(() => {
    const getReservedTickets = async () => {
      const data = await fetchTicketReservations();
      data.forEach((ticket) => {
        ticket.createdTimestamp = dateTransform(ticket.createdTimestamp)
        ticket.updatedTimestamp = dateTransform(ticket.updatedTimestamp)
      })
      setResTics(data);
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
    event.preventDefault();
    setUser(event.target[0].value);
  };

  const handleTicketCreate = async (event) => {
    event.preventDefault();
    const newReservation = {
      matchid: selectedMatch,
      user: user,
      numberOfTickets: Number(event.target[0].value),
    };
    const ticket = await postTicketReservation(newReservation);
    ticket.createdTimestamp = dateTransform(ticket.createdTimestamp)
    ticket.updatedTimestamp = dateTransform(ticket.updatedTimestamp)
    setResTics([...reservedTickets, ticket]);
  };

  const handleTicketDelete = async (id) => {
    const status = await deleteTicketReservation(id);
    if (status === 202) {
      const newReservedTickets = reservedTickets
        .slice()
        .filter((ticket) => ticket._id != id);
      setResTics(newReservedTickets);
    }
  };

  const handleTicketEdit = async (event, reservation) => {
    event.preventDefault();
    const updatedTicket = {
      ...reservation,
      user: event.target[0].value ? event.target[0].value : reservation.user,
      numberOfTickets: event.target[1].value
        ? Number(event.target[1].value)
        : reservation.numberOfTickets,
      comments: event.target[2].value
        ? event.target[2].value
        : reservation.comments,
    };
    const status = await editTicketReservation(updatedTicket);
    if (status === 204) {
      const newReservedTickets = reservedTickets
        .slice()
        .filter((ticket) => ticket._id !== updatedTicket._id);
      newReservedTickets.push(updatedTicket);
      setResTics(newReservedTickets);
    }
  };

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
              match={matches.find((match) => match.matchid == selectedMatch)}
              tickets={{
                reservations: reservedTickets.filter(
                  (ticket) => ticket.matchid == selectedMatch
                ),
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
