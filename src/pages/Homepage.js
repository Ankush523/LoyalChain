import React from 'react';
import './Homepage.css'

function Homepage() {
    return ( 
        <div className='main' >
            <label className='header' >Reward <br/>OnChain Loyalty</label>
            <br/>
            <br/>
            <label className='subhead' >Reward your brand’s biggest fans, <br/> wherever they shop. </label>
            <br/>
            <br/>
            <label className='subhead'>Use LoyalChain to track and engage <br/> loyal customers with exclusive offers.</label>
            <a href='/Campaign'><button className='startbtn' >Get Started</button></a>
        </div>
     );
}

export default Homepage;