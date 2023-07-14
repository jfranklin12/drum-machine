import React, { useState } from 'react';
import './drumMachine.css';
import DrumPad from './DrumPad';
import heater1 from "../assets/audio/heater1.mp3";
import heater2 from "../assets/audio/heater2.mp3";
import heater3 from "../assets/audio/heater3.mp3";
import heater4 from "../assets/audio/heater4.mp3";
import clap from "../assets/audio/clap.mp3";
import openHH from "../assets/audio/openHH.mp3";
import kickNHat from "../assets/audio/kickNHat.mp3";
import kick from "../assets/audio/kick.mp3";
import closedHH from "../assets/audio/closedHH.mp3";


const DrumMachine = () => {

    // durm pad buttons data
    const drumPadButtons = [
        { id: 'Q', name: 'Heater 1', audio: heater1 },
        { id: 'W', name: 'Heater 2', audio: heater2 },
        { id: 'E', name: 'Heater 3', audio: heater3 },
        { id: 'A', name: 'Heater 4', audio: heater4 },
        { id: 'S', name: 'Clap', audio: clap },
        { id: 'D', name: 'Open HH', audio: openHH },
        { id: 'Z', name: `Kick n' Hat`, audio: kickNHat },
        { id: 'X', name: 'Kick', audio: kick },
        { id: 'C', name: 'Closed HH', audio: closedHH }
    ];

    const [displayName, setDisplayName] = useState('');

    const handleDrumPadTrigger = (name) => {
        setDisplayName(name);
    };




    return (
        <div id="drum-machine">
            {/* control pannel */}
            <div className='container'>
                <div id="display" className='btn'><p>{displayName}</p></div>
            </div>
            {/* drum pad */}
            <div className='drum-pad-container container'>
                {/* map of drum pad buttons */}
                {drumPadButtons.map(({ id, audio, name }) => (
                    <DrumPad key={id} id={id} audio={audio} onTrigger={handleDrumPadTrigger} name={name} />
                ))}

            </div>


        </div>
    )
}

export default DrumMachine;