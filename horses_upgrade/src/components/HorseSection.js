import React from 'react';
import { Button } from './Button';
import './HorseSection.css'
import '../App.css'

function HorseSection(props) {
    return (
        <div className='horse-container'>
            <video src='/src/videos/video 1.mp4' autoPlay loop muted/>
            <h1>HORSES</h1>
            <p>What are you waiting for?</p>
            <div className="horse-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED</Button>

                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'/></Button>

            </div>
            
        </div>
    );
}

export default HorseSection;