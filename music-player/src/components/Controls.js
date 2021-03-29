import { faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Controls() {
    return (
        <div className="control">
            <button className="control__skipBtn">
                <FontAwesomeIcon icon={faBackward}/>
            </button>
            <button className="control__playBtn">
                <FontAwesomeIcon icon={faPause}/>
            </button>
            <button className="control__skipBtn">
                <FontAwesomeIcon icon={faForward}/>
            </button>
        </div>
    )
}

export default Controls
