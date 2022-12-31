import React from 'react';
import MatchBanner from './MatchBanner';
import MatchHeader from './MatchHeader';
import MatchInfoShort from './MatchInfoShort';

function NextMatches({matches}) {
  return (
    <div>
      {matches.map(match =>{
            return (
              <div className='NextMatches'>
                <MatchInfoShort match={match} />
                <MatchBanner match={match} />
              </div>
            )
      })}
    </div>
  );
}

export default NextMatches;