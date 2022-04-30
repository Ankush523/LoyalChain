import React from 'react';
import './Buyget.css'
import {BsChevronLeft} from "react-icons/bs"

function Buyget() {
    return ( 
        <div className='main'>
            
            <a href='/Campaign'><label id='darktext' className='subtitle'><span className='icon'><BsChevronLeft/></span> All programs</label></a>
            <br/>
            <label className='title'>Setup Buy many, Get one free program</label>
            <br/>
            <br/>
            <label className='subtitle'>Program name :</label>
            <input className='inputbox' type='text' placeholder="e.g, Buy 10 coffees , get 1 free" />
        </div>
     );
}

export default Buyget;