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
                <MatchInfoShort key={match.matchid+"info"} match={match} />
                <MatchBanner key={match.matchid+"banner"} match={match} />
              </div>
            )
      })}
    </div>
  );
}

export default NextMatches;