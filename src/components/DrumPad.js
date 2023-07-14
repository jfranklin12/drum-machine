import React, { useRef, useEffect } from 'react';

const DrumPad = ({ id, audio, onTrigger, name }) => {
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play();
        onTrigger(name);
    }

    const handleClick = () => {
        playAudio();
    };

    const handleKeyDown = (e) => {
        if (e.code === `Key${id}`) {
            playAudio();
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
            {id}
            <audio className='clip' src={audio} id={id} ref={audioRef}></audio>

        </div>
    )
}

export default DrumPad;