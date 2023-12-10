import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import CountUp from 'react-countup';
import Bnb from './Component/Bnb';
import Busd from './Component/Busd';
import bnbIcon from './icons/bnb.png'
import busdIcon from './icons/busd.png'

const Presale = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
  const { open } = useWeb3Modal()
  const [showTab, setShowtab] = useState(1)
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
                                                <button onClick={() => open()}>{isDisconnected?"CONNECT":`${address?.slice(0,4)}...${address?.slice(-5)}`}</button>
                                            </div>

                                            <ul class="nav nav-pills" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link text-white active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                                        <img src={bnbIcon} width={20} style={{ marginRight: '10px' }} alt="BNB" />
                                                        BNB
                                                    </button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                    <img src={busdIcon} width={20} style={{ marginRight: '10px' }} alt="BNB" />
                                                     BUSD
                                                    </button>
                                                </li>
                                                
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                    <Bnb />
                                                </div>
                                                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
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