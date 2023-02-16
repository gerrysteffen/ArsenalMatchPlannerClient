import React from 'react';
import MatchBanner from './MatchBanner.js';
import MatchInfoShort from './MatchInfoShort.js';

function NextMatches({matches}) {
  return (
    <div>
      {matches.map(match =>{
            return (
              <div key={match.matchid} className='next-matches'>
                <MatchInfoShort key={match.matchid+'1'} match={match} />
                <MatchBanner key={match.matchid+'2'} match={match} />
              </div>
            )
      })}
    </div>
  );
}

export default NextMatches;