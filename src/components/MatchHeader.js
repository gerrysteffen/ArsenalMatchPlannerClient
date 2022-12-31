import React from 'react';
import MatchBanner from './MatchBanner';

function MatchHeader({match}) {
  return (
    <div className='MatchHeader'>
      <div>
        <MatchBanner match={match} />
      </div>
      <div className='MHInfo'>
        {match.date} - {match.tournament}, Round {match.round}: 
      </div>
      <div>
        
      </div>
    </div>
  );
}

// 

export default MatchHeader;