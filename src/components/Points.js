import React, { useState, useEffect } from 'react';
import './Buyget.css'
import './Ponts.css'
import { ethers } from 'ethers';
import {BsChevronLeft, BsFileArrowDown} from "react-icons/bs"
import {FaChevronDown} from 'react-icons/fa'
import useProvider from '../hooks/useProvider';
import useContract from '../hooks/useContract';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function Points() {
    const[reward,setReward]=useState('');
    const[prgname,setPrgname]=useState('');
    const[point,setPoint]=useState('');
    const[currentAccount,setcurrentAccount]=useState('');
    const[balance,setBalance]=useState('');
    const[pointList,setPointList]=useState([]);
    const provider=useProvider();
    const Pointcontract = useContract('PointProgram');

    useEffect(() => {  
     window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          setcurrentAccount(result[0]);
  
          provider.getBalance(result[0])
            .then(ethers.utils.formatEther)
            .then(setBalance);
        Pointcontract.getPoint().then(setPointList);
        Pointcontract.getPoint().then(console.log);

        });  
    }, []);

    const acc = currentAccount.substring(0,5)+'...'+currentAccount.substring(39,42);

    const showPoint = async() =>{
        await Pointcontract.getPoint().then(console.log);
    }

    const addPoints = () =>{
        Pointcontract.addPoint(prgname,reward,point);
    }


    return ( 
        <div className='main'>
            <a href='/Campaign'><label id='darktext' className='subtitle'><span className='icon'><BsChevronLeft/></span> All programs</label></a>
            <br/>
            <label className='title'>Setup Points Program</label>
            <label className='subtitle'>Connected Account : <span className='display'>{acc}</span></label>
            <label className='subtitle'>Balance : <span className='display'>{balance} MATIC</span></label>
            <div className='optionbox' >
               <div className='options'>
                   <label>Program Name :</label>
                   <input className='prginput' placeholder='Eg. 10x Points Program' onChange={e => setPrgname(e.target.value)}></input>
               </div>
               <div className='options' >
                    <label>Rewards per MATIC spent</label>
                    <input id='points' className='smallinput' placeholder='0.05 MATIC' onChange={e => setReward(e.target.value)} ></input>
               </div>
               <div className='options' >
                    <label>Points Multiplier</label>
                    <input className='smallinput' placeholder='x10000' onChange={e => setPoint(e.target.value)} ></input>
               </div>
            </div>
            <label className='example' ><span className='extitle' >Explanation <br/></span>If a customer spends 1 MATIC, they will get {reward * point} points which is redeemable for {reward * point / 100} MATIC</label>
            <a><button onClick={addPoints} className='buybtn'>Start Program</button></a>
            <br/>
            <br/>
            <label className='title' >Program Details</label>
            <Accordion allowZeroExpanded={true}>
            <AccordionItem >
                <AccordionItemHeading >
                    <AccordionItemButton className='accord'>
                        <span><label className='accordicon'><FaChevronDown/></label> Active Programs</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <br/>
                        <table className='pointslist'>
                        <thead>
                            <tr>
                                <th>Program Name</th>
                                <th>Rewards</th>
                                <th>Points Multiplier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pointList.map((points,key)=>{
                                return(
                                    <tr key={key}>
                                        <td>{points.name}</td>
                                        <td>{points.reward}</td>
                                        <td>{points.multiplier}</td>
                                    </tr>
                                )
                            })

                            }
                        </tbody>
                    </table>
                    <br/>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='accord'>
                        <label><FaChevronDown/> Current Members</label>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <br/>
                        <table className='pointslist'>
                        <thead>
                            <tr>
                                <th>Program Name</th>
                                <th>Rewards</th>
                                <th>Points Multiplier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pointList.map((points,key)=>{
                                return(
                                    <tr key={key}>
                                        <td>{points.name}</td>
                                        <td>{points.reward}</td>
                                        <td>{points.multiplier}</td>
                                    </tr>
                                )
                            })

                            }
                        </tbody>
                    </table>
                    <br/>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
     );
}

export default Points;