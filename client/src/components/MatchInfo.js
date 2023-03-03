import React, { useEffect, useState } from 'react';

function MatchInfo({match, tickets}) {
  const [remainingTickets, setRemainingTickets] = useState(0)

  useEffect((match)=>{
    setTimeout(()=>{
      const newRemainingTickets = match.availableTickets-match.claimedTickets
      setRemainingTickets(newRemainingTickets)
    }, 100)
  }, [tickets, match])

  return (
    <div className='match-info'>
      <div>
        Date:
      </div>
      <div>
        {match.timestamp.weekday+', '+match.timestamp.shortDate}
      </div>
      <div>
        Time:
      </div>
      <div>
        {match.timestamp.time}
      </div>
      <div>
        Tournament:
      </div>
      <div>
        {match.tournament+', Round '+match.round}
      </div>
      <div>
        Home Team:
      </div>
      <div>
        {match.homeTeam.name}
      </div>
      <div>
        Away Team:
      </div>
      <div>
        {match.awayTeam.name}
      </div>
      <div>
        Tickets available:
      </div>
      <div className='status'>
        {match.availableTickets ? 
          remainingTickets+' / '+match.availableTickets : 
          ' no tickets'}
        {match.availableTickets && match.claimedTickets < match.availableTickets ? 
          <div className='status-circle green'></div> : 
          <div className='status-circle red'></div>}
      </div>
    </div>
  );
}

export default MatchInfo;