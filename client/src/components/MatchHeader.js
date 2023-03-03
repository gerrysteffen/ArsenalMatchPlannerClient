import React from 'react';
import MatchBanner from './MatchBanner.js';
import MatchInfo from './MatchInfo.js';

function MatchHeader({match, tickets}) {
  return (
    <div className='match-header'>
      <div>
        <MatchBanner match={match} />
      </div>
      <div>
        <MatchInfo match={match} tickets={tickets}/>
      </div>
      <div>
        
      </div>
    </div>
  );
}

// 

export default MatchHeader;