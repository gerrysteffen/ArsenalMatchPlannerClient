import React from 'react';

function MatchSelect({ matches, handleSelect }) {
  return (
    <div className="match-select">
      <select id="match-select" className='dropdown' onChange={(event) => handleSelect(event)}>
        <option value="">-- Overview - select match --</option>
        {matches.length > 0 &&
          matches.map((match) => {
            return (
              <option key={match.matchid} value={match.matchid}>
                {match.timestamp.shortDate}
                {' : '}
                {match.homeTeam.shortName}
                {' vs. '}
                {match.awayTeam.shortName}
                {match.availableTickets ? 
                ' (avail: '+(match.availableTickets-match.claimedTickets)+' / '+match.availableTickets+')' : 
                ' (no tickets)'}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default MatchSelect;
