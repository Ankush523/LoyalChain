import React, { useState, useEffect } from 'react';
import './Buyget.css'
import { ethers } from 'ethers';
import {BsChevronLeft} from "react-icons/bs"
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import useProvider from '../hooks/useProvider';

function Points() {
    const[reward,setReward]=useState('');
    const[point,setPoint]=useState('');
    const[currentAccount,setcurrentAccount]=useState('');
    const[balance,setBalance]=useState('');
    const provider=useProvider();

    useEffect(() => {  
     window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          setcurrentAccount(result[0]);
  
          provider.getBalance(result[0])
            .then(ethers.utils.formatEther)
            .then(setBalance);

        });  
    }, [])

    const acc = currentAccount.substring(0,5)+'...'+currentAccount.substring(39,42);


    return ( 
        <div className='main'>
            <a href='/Campaign'><label id='darktext' className='subtitle'><span className='icon'><BsChevronLeft/></span> All programs</label></a>
            <br/>
            <label className='title'>Setup Points Program</label>
            <label className='subtitle'>Connected Account : <span className='display'>{acc}</span></label>
            <label className='subtitle'>Balance : <span className='display'>{balance} MATIC</span></label>
            <div className='optionbox' >
               <div className='options' >
                    <label>Rewards per MATIC spent</label>
                    <input id='points' className='smallinput' placeholder='0.05 MATIC' onChange={e => setReward(e.target.value)} ></input>
               </div>
               <div className='options' >
                    <label>Points Multiplier</label>
                    <input className='smallinput' placeholder='x10000' onChange={e => setPoint(e.target.value)} ></input>
               </div>
            </div>
            <label className='example' ><span className='extitle' >Example<br/></span>If a customer spends 100 MATIC, they will get {reward * point} points which is redeemable for {reward * point / 100} MATIC</label>
            <a><button className='buybtn'>Start Program</button></a>
        </div>
     );
}

export default Points;