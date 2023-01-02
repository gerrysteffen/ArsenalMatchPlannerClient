import React from 'react';

function MatchInfoShort({match}) {
  return (
    <div className='match-info-short'>
        <div>
          {match.timestamp.date+' - '+match.tournament+', Round '+match.round}
        </div>
        <div className='status'>
          {match.availableTickets ? 
            ' avail: '+(match.availableTickets-match.claimedTickets)+' / '+match.availableTickets : 
            ' no tickets'}
          {match.availableTickets && match.claimedTickets < match.availableTickets ? 
            <div className='status-circle green'></div> : 
            <div className='status-circle red'></div>}
        </div>
    </div>
  );
}

export default MatchInfoShort;