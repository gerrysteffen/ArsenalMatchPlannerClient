import { useEffect, useState } from 'react';
import {
  deleteTicketReservation,
  editTicketReservation,
  fetchMatches,
  fetchTicketReservations,
  fetchUsers,
  postTicketReservation,
  postUser,
} from './api-client.js';
import './App.css';
import Header from './components/Header.js';
import IndividualMatch from './components/IndividualMatch.js';
import MatchSelect from './components/MatchSelect.js';
import NextMatches from './components/NextMatches.js';
import SetUser from './components/SetUser.js';
import { calculateAvailability, dateTransform } from './helperfunctions.js';

function App() {
  const [activeUser, setActiveUser] = useState('');
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [reservedTickets, setResTics] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getMatches = async () => {
      const data = await fetchMatches();
      data.forEach((match) => {
        match.timestamp = dateTransform(match.timestamp);
      });
      setMatches(data);
    };
    getMatches();
    setReady(false);
  }, []);

  useEffect(() => {
    const getReservedTickets = async () => {
      const data = await fetchTicketReservations();
      data.forEach((ticket) => {
        ticket.createdTimestamp = dateTransform(ticket.createdTimestamp);
        ticket.updatedTimestamp = dateTransform(ticket.updatedTimestamp);
      });
      setResTics(data);
    };
    getReservedTickets();
  }, [matches]);

  useEffect(() => {
    setReady(false);
    const newMatches = calculateAvailability(matches, reservedTickets);
    setMatches(newMatches);
    setReady(true);
  }, [reservedTickets, matches]);

  const handleSelect = (event) => {
    if (event.target.value !== '') {
      setSelectedMatch(Number(event.target.value));
    } else {
      setSelectedMatch('');
    }
  };

  const handleUserChange = async (username) => {
    setReady(false)
    if (
      username !== '' &&
      users.filter((data) => data.name === username).length === 0
    ) {
      const newUser = await postUser({ name: username });
      setUsers([...users, newUser]);
    }
    setActiveUser(username);
    setReady(true)
  };

  const handleTicketCreate = async (numTickets) => {
    if (!activeUser) {
      document.getElementById('warningUser').style.display = 'inline'
      setInterval(()=>{
        document.getElementById('warningUser').style.display = 'none'
      }, 5000)
    } else if (!numTickets) {
      document.getElementById('warningTickets').style.display = 'inline'
      setInterval(()=>{
        document.getElementById('warningTickets').style.display = 'none'
      }, 5000)
    } else {
      const newReservation = {
        matchid: selectedMatch,
        user: activeUser,
        numberOfTickets: Number(numTickets),
      };
      const ticket = await postTicketReservation(newReservation);
      ticket.createdTimestamp = dateTransform(ticket.createdTimestamp);
      ticket.updatedTimestamp = dateTransform(ticket.updatedTimestamp);
      setResTics([...reservedTickets, ticket]);
      document.getElementById('step3confirmation').style.display = 'inline'
      setInterval(()=>{
        document.getElementById('step3confirmation').style.display = 'none'
      }, 5000)
    }
  };

  const handleTicketDelete = async (id) => {
    const status = await deleteTicketReservation(id);
    if (status === 202) {
      const newReservedTickets = reservedTickets
        .slice()
        .filter((ticket) => ticket._id !== id);
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
      updatedTimestamp: dateTransform(new Date()),
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
      <div className="header-container">
        <Header />
      </div>
      {ready ? (
        <div className="body">
          <div>
            <div className="instructions">
              {'Step 1 - who would like to use tickets:'}
            </div>
            <SetUser
              activeUser={activeUser}
              users={users}
              handleUserChange={handleUserChange}
            />
          </div>
          <div>
            <div className="instructions">{'Step 2 - choose the match:'}</div>
            <MatchSelect matches={matches} handleSelect={handleSelect} />
          </div>

          <div className="next-matches-container">
            {selectedMatch === '' && (
              <div>
                <div className="next-matches-title">UPCOMING MATCHES</div>
                <NextMatches matches={matches} />
              </div>
            )}
          </div>

          <div className="individual-match">
            {selectedMatch !== '' && (
              <IndividualMatch
                match={matches.find((match) => match.matchid === selectedMatch)}
                tickets={reservedTickets.filter(
                  (ticket) => ticket.matchid === selectedMatch
                )}
                ticketMethods={{
                  create: handleTicketCreate,
                  delete: handleTicketDelete,
                  edit: handleTicketEdit,
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default App;
