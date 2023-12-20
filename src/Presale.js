import React, { useEffect } from 'react'
import Bnb from './Component/Bnb';
import Busd from './Component/Busd';
import bnbIcon from './icons/bnb.png'
import busdIcon from './icons/busd.png'
import { useState } from 'react';
import { CONFIG } from './config/config'
import presaleABI from './config/presaleAbi.json'
import { useContractReads } from 'wagmi'
import { formatEther } from 'viem';

const presaleContract = {
    address: CONFIG.PRESALE_CONTRACT_ADDRESS,
    abi: presaleABI,
  }
  

const Presale = () => {
    const [showTab, setShowTab] = useState(1)
    const [stage, setStage] = useState(0)
    const [amountRaised, setAmountRaised] = useState(0)
    const [totalDist, setTotDist] = useState(0)
    const [totalRem, setTotRem] = useState(0)
    const [progress, setProgress] = useState(0)
    const [rate, setRate] =useState(0)
    const totalTokenPresale = 6000000
    const { data, isError, isLoading, refetch:fetchContractData } = useContractReads({
        contracts: [
            {
                ...presaleContract, 
                functionName: 'getStage'
            },
            {
                ...presaleContract, 
                functionName: 'weiRaised'
            },
            {
                ...presaleContract, 
                functionName: '_totalDistribution'
            }
        ], 
        onSuccess(data) {
            console.log(data)
            setStage(data[0]?.result)
            setAmountRaised(formatEther(data[1]?.result))
            setTotDist(formatEther(data[2]?.result))
        }
    })
    const rates = {
        0: 0.2,
        1: 0.22,
        2: 0.24,
        3: 0.26,
        4: 0.28,
        5: 0.3
    }

    useEffect(()=>{
        setTotRem(totalTokenPresale - totalDist)
        const percentage = (parseFloat(totalDist) / parseFloat(totalTokenPresale)) * 100;
        setProgress(parseFloat(percentage).toFixed(2))
    }, [totalDist])

  return (
    <div className="stacking padding-top padding-bottom">
    <div className="container">
        <div className="presale__wrapper">
            <div className="presale__project">
                <div className="row g-4">
                    <div className="col-sm-12 col-md-5">
                        <div className="stacking__project-item ">
                            <div className="stacking__project-itemInner">
                                <h3>6</h3>
                                <p>Total Stages</p>
                            </div>
                            
                        </div>

                        <div className="stacking__project-item mt-4">
                            <div className="stacking__project-itemInner">
                                <h3>$ {parseFloat(amountRaised).toFixed(4)} </h3>
                                <p>Amount Raised </p>
                            </div>
                        </div>

                        <div className="stacking__project-item mt-4">
                            <div className="stacking__project-itemInner">
                                <h3> {new Intl.NumberFormat('en-US').format(
                                        totalTokenPresale,
                                    )}
                                     </h3>
                                <p>Total tokens available for sale</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-7'>
                        <div className="presale__details">
                            <div className="presale__title">
                                <h3>Participate $MART Presale</h3>
                            </div>

                            <div className="presale__content">
                                <div className="row align-items-center g-5">
                                    <div className="col-12">
                                        <div className="stacking__approve">
                                        
                                            <div className='d-flex align-items-center justify-content-between mb-3'>
                                                <div>
                                                    <span className='fw-bold'>Current Stage</span>
                                                    <span className='d-block text-primary' >Stage {stage+1}</span>
                                                </div>
                                                <div>
                                                    <span className='fw-bold'>Remaining Tokens</span>
                                                    <span className='d-block text-primary' >{new Intl.NumberFormat('en-US').format(
                                                        totalRem,
                                                    )} $mart</span>
                                                </div>
                                            </div>

                                            <div>
                                                <h5 className='text-center'>BUY BEFORE PRICE INCREASE!</h5>
                                            </div>

                                            <div className='mb-3'>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                                                        {progress}% sold
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <span className='fw-bold' style={{fontSize:'14px'}}>Next Stage Price</span>
                                                        <small className='d-block text-primary text-center'>$ {rates[stage+1]}</small>
                                                    </div>
                                                    <div>
                                                        <span className='fw-bold' style={{fontSize:'14px'}}>Total Token Sold</span>
                                                        <small className='d-block text-primary text-center'>{
                                                            new Intl.NumberFormat('en-US').format(totalDist)
                                                        }</small>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='divider mb-3'>
                                                <h6>$ {rates[stage]} = 1 $mart </h6>
                                            </div>

                                            <ul className="nav nav-pills" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className={`nav-link text-white ${showTab === 1 ? 'active' : ''}`} onClick={() => setShowTab(1)}>
                                                        <img src={bnbIcon} width={20} style={{ marginRight: '10px' }} alt="BNB" />
                                                        BNB
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className={`nav-link text-white ${showTab === 2 ? 'active' : ''}`} onClick={() => setShowTab(2)}>
                                                    <img src={busdIcon} width={20} style={{ marginRight: '10px' }} alt="BNB" />
                                                     BUSD
                                                    </button>
                                                </li>
                                                
                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div className={`tab-pane fade ${showTab === 1 ? 'show active' : ''}`} >
                                                    <Bnb fetch={fetchContractData} rates={rates} stage={stage} />
                                                </div>
                                                <div className={`tab-pane fade ${showTab === 2 ? 'show active' : ''}`} >
                                                    <Busd fetch={fetchContractData} rates={rates} stage={stage} />
                                                </div>
                                                
                                            </div>    
                                            

                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default Presale