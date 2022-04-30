import React from 'react';
import './Campaign.css'
import gift from '../gift.svg'
import prize from '../prize.svg'

function Campaign() {
    return ( 
        <div className='cmain'>
            <label className='title'>Choose a rewards program</label>
            <label className='subtitle'>Pick from one of our templates</label>
            <div className='cardbox'>
                <div className='card' >
                    <img src={gift} width="70px"/>
                    <label className='cardtitle'>Buy many, get one free</label>
                    <label className='cardsubtitle'>The classic coffee stand reward. Treat your repeat customers with a gift.</label>
                </div>
                <div className='card' >
                    <img src={prize} width="70px"/>
                    <label className='cardtitle'>Points program</label>
                    <label className='cardsubtitle'>Reward loyal customers with points for each purchase. You can add more prizes over time, and based on the level of loyalty.</label>
                </div>
                <div className='card' >
                    <img src={gift} width="70px"/>
                    <label className='cardtitle'>Buy many, get one free</label>
                    <label className='cardsubtitle'>The classic coffee stand reward. Treat your repeat customers with a gift.</label>
                </div>
            </div>
        </div>
     );
}

export default Campaign;