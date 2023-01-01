import React from 'react';
import MatchHeader from './MatchHeader.js';
import ReservedTickets from './ReservedTickets.js';

function IndividualMatch({ match, reservedTickets, handleTicketSubmit }) {
  return (
    <div>
      <MatchHeader match={match} />
      <ReservedTickets reservedTickets={reservedTickets} handleTicketSubmit={handleTicketSubmit} />
    </div>
  );
}

export default IndividualMatch;