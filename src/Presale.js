import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import CountUp from 'react-countup';
const Presale = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
  const { open } = useWeb3Modal()
  const [showTab, setShowtab] = useState(1)
  return (
    <div className="stacking padding-top padding-bottom">
    <div className="container">
        <div className="stacking__wrapper">
            <div className="stacking__project">
                <div className="row g-4">
                    <div className="col-lg-4 col-sm-6">
                        <div className="stacking__project-item">
                            <div className="stacking__project-itemInner">
                                <h3>1 </h3>
                                <p>Stage</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="stacking__project-item">
                            <div className="stacking__project-itemInner">
                                <h3>$ 4514 </h3>
                                <p>Funds Raised </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="stacking__project-item">
                            <div className="stacking__project-itemInner">
                                <h3> 0.2 / $mart Token </h3>
                                <p>Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stacking__details">
                <div className="stacking__title">
                    <h3>Participate $MART Presale</h3>
                </div>

                <div className="stacking__content">
                    <div className="row align-items-center g-5">
                        <div className="col-12">
                            <div className="stacking__approve">
                             
                                <div className='swap1'>
                                    <div className='imagediv'>
                                        <img src='\assets\images\shape\logoicon.svg' className='downloadImage'/>
                                        <h6>$MART SWAP</h6>
                                    </div>
                                    <button onClick={() => open()}>{isDisconnected?"CONNECT":`${address?.slice(0,4)}...${address?.slice(-5)}`}</button>
                                </div>


                                <div className="stacking__approve-field mb-5">
                                    <label for="approve-stack" className="form-label">Balance: <span>3529.00 BUSD</span>
                                    </label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" aria-label="Approve Stack"
                                            id="approve-stack" placeholder="0.00"/>
                                        <span className="input-group-text">Max</span>
                                        <button className="input-group-btn">Approve</button>
                                    </div>
                                </div>
             
                                <div className="stacking__approve-withdraw">
                                    <label for="withdraw-stack" className="form-label">Staked: <span>350.70 BUSD</span>
                                    </label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" aria-label="Withdraw Stack"
                                            id="withdraw-stack" placeholder="0.00"/>
                                        <span className="input-group-text">Max</span>
                                        <button className="input-group-btn withdraw-btn">Withdraw</button>
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