import React, { useRef, useEffect, useState } from 'react';

const DrumPad = ({ id, audio, onTrigger, name }) => {
    const audioRef = useRef(null);
    const drumPadRef = useRef(null);
    const [active, setActive] = useState(false);

    const playAudio = () => {
        audioRef.current.play();
        onTrigger(name);
    }

    const handleClick = () => {
        setActive(true);
        playAudio();
    };

    const handleKeyDown = (e) => {
        if (e.code === `Key${id}`) {
            setActive(true);
            playAudio();
        }
    };

    const handleKeyUp = (event) => {
        if (event.code === `Key${id}`) {
          setActive(false);
        }
      };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <div className={`drum-pad btn ${active ? 'active': ''}`} id={id} onClick={handleClick} onTransitionEnd={() => setActive(false)} ref={drumPadRef}>
            <p>{id}</p>
            <audio className='clip' src={audio} id={id} ref={audioRef}></audio>

        </div>
    )
}

export default DrumPad;