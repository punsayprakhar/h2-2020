import React from 'react'
import Controls from './Controls'
import Details from './Details'

function Player() {
    return (
        <div className="player">
            <h4>
                Playing now
            </h4>
                <Details/>
                <Controls/>
                <audio className="player__audio" src="" controls>
                </audio>
                <p>
                    Next up : <span>Next song</span>
                </p>
        </div>
    )
}

export default Player
