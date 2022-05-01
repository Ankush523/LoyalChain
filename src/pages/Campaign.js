import React from 'react';
import './Campaign.css'
import gift from '../gift.svg'
import prize from '../prize.svg'
import coupon from '../coupon.svg'

function Campaign() {
    return ( 
        <div className='cmain'>
            <label className='title'>Choose a rewards program</label>
            <label className='subtitle'>Pick from one of our templates</label>
            <div className='cardbox'>
                <div className='card' >
                    <img src={gift} width="70px"/>
                    <label className='cardtitle'>Buy many, get one free </label>
                    <label className='cardsubtitle'>The classic coffee stand reward. Treat your repeat customers with a gift.</label>
                    <a href='/Campaign/BuyGet'><button className='setbtn'>Set up</button></a>
                </div>
                <div className='card' >
                    <img src={prize} width="70px"/>
                    <label className='cardtitle'>Points program</label>
                    <label className='cardsubtitle'>Reward loyal customers with points for each purchase. You can add more prizes over time, and based on the level of loyalty.</label>
                    <a href='/Campaign/BuyGet'><button className='setbtn'>Set up</button></a>
                </div>
                <div className='card' >
                    <img src={coupon} width="80px"/>
                    <label className='cardtitle'>NFT Coupons</label>
                    <label className='cardsubtitle'>NFT based coupons give a more manageable and digital way to provide loyalty incentives which can be tracked across the blockchain.</label>
                    <a href='/Campaign/BuyGet'><button className='setbtn'>Set up</button></a>
                </div>
            </div>
        </div>
     );
}

export default Campaign;