import React from 'react';

const DrumPad = ({ id, text, audio }) => {

    return (
        <div className="drum-pad" id={id}>
            {text}
            <audio className='clip' src={audio} id={id}></audio>

        </div>
    )
}

export default DrumPad;