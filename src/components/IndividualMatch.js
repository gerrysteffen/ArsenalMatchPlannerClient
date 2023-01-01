import React from 'react';
import MatchHeader from './MatchHeader.js';
import ReservedTickets from './ReservedTickets.js';

function IndividualMatch({ match, tickets }) {
  return (
    <div>
      <MatchHeader match={match} />
      <ReservedTickets tickets={tickets} />
    </div>
  );
}

export default IndividualMatch;