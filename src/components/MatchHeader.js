import React from 'react';
import MatchBanner from './MatchBanner.js';
import MatchInfo from './MatchInfo.js';

function MatchHeader({match}) {
  return (
    <div className='MatchHeader'>
      <div>
        <MatchBanner match={match} />
      </div>
      <div>
        <MatchInfo match={match}/>
      </div>
      <div>
        
      </div>
    </div>
  );
}

// 

export default MatchHeader;