import React from 'react';

function MatchInfo({match}) {
  return (
    <div className='MatchInfo'>
      <div>
        Date & Time:
      </div>
      <div>
        {match.timestamp.date}
      </div>
      <div>
        Tournament:
      </div>
      <div>
        {match.tournament}
      </div>
      <div>
        Round:
      </div>
      <div>
        {match.round}
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
    </div>
  );
}

export default MatchInfo;