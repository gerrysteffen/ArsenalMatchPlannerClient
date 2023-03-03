import React from 'react';

function MatchSelect({ matches, selectedMatch, handleSelect }) {
  const handleChange = (e) => {
    handleSelect(e.target.value);
  };

  return (
    <div className='match-select'>
      <select
        id='match-select'
        className='dropdown'
        value={selectedMatch}
        onChange={(event) => handleChange(event)}
      >
        <option value=''>-- Overview - select match --</option>
        {matches.length > 0 &&
          matches.map((match) => {
            return (
              <option key={match.matchid} value={match.matchid}>
                {match.timestamp.shortDate}
                {' : '}
                {match.homeTeam.shortName}
                {' vs. '}
                {match.awayTeam.shortName}
                {match.availableTickets
                  ? ' (avail: ' +
                    (match.availableTickets - match.claimedTickets) +
                    ' / ' +
                    match.availableTickets +
                    ')'
                  : ' (no tickets)'}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default MatchSelect;
