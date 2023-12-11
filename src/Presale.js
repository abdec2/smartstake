import React from 'react'
import Bnb from './Component/Bnb';
import Busd from './Component/Busd';
import bnbIcon from './icons/bnb.png'
import busdIcon from './icons/busd.png'
import { useState } from 'react';

const Presale = () => {
    const [showTab, setShowTab] = useState(1)
  return (
    <div className="stacking padding-top padding-bottom">
    <div className="container">
        <div className="presale__wrapper">
            <div className="presale__project">
                <div className="row g-4">
                    <div className="col-sm-12 col-md-5">
                        <div className="stacking__project-item">
                            <div className="stacking__project-itemInner">
                                <h3>1 </h3>
                                <p>Stage</p>
                            </div>
                        </div>

                        <div className="stacking__project-item mt-4">
                            <div className="stacking__project-itemInner">
                                <h3>$ 4514 </h3>
                                <p>Amount Raised </p>
                            </div>
                        </div>

                        <div className="stacking__project-item mt-4">
                            <div className="stacking__project-itemInner">
                                <h3> 0.2 / $mart Token </h3>
                                <p>Rate</p>
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
                                        
                                            <div className='swap1'>
                                                <div className='imagediv'>
                                                    <img src='\assets\images\shape\logoicon.svg' className='downloadImage'/>
                                                    <h6>$MART Presale</h6>
                                                </div>
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
                                                    <Bnb />
                                                </div>
                                                <div className={`tab-pane fade ${showTab === 2 ? 'show active' : ''}`} >
                                                    <Busd />
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