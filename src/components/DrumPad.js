import React, { useRef } from 'react';

const DrumPad = ({ id, text, audio }) => {
    const audioRef = useRef(null);

    const handleClick = () => {
        audioRef.current.play();
    };

    return (
        <div className="drum-pad" id={id} onClick={handleClick}>
            {text}
            <audio className='clip' src={audio} id={id} ref={audioRef}></audio>

        </div>
    )
}

export default DrumPad;