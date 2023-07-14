import React from 'react';
import './drumMachine.css';
import DrumPad from './DrumPad';
import heater1 from "../assets/audio/heater1.mp3"

const DrumMachine = () => {

    // durm pad buttons data
    const drumPadButtons = [
        { id: 'heater1', text: 'Q', audio: heater1 }
    ]
    

    return (
        <div id="drum-machine">
            <div id="display"></div>
            <div className='drum-pad-container'>
                {/* map of drum pad buttons */}
                {drumPadButtons.map(({ id, text, audio }) => (
                    <DrumPad key={id} id={id} text={text} audio={audio} />
                ))}

            </div>
                
            
        </div>
    )
}

export default DrumMachine;