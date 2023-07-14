import React, { useRef, useEffect } from 'react';

const DrumPad = ({ id, text, audio }) => {
    const audioRef = useRef(null);

    const handleClick = () => {
        audioRef.current.play();
    };

    const handleKeyDown = (e) => {
        if (e.code === `Key${id}`) {
            audioRef.current.play();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="drum-pad" id={id} onClick={handleClick}>
            {text}
            <audio className='clip' src={audio} id={id} ref={audioRef}></audio>

        </div>
    )
}

export default DrumPad;