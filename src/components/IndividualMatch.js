import React from 'react';
import MatchHeader from './MatchHeader.js';
import ReservedTickets from './ReservedTickets.js';

function IndividualMatch({match}) {
  return (
    <div>
      <MatchHeader match={match} />
      <ReservedTickets match={match} />
    </div>
  );
}

export default IndividualMatch;