import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import CountUp from 'react-countup';
const Staking = () => {
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
                                <h3>$ <span className="purecounter" data-purecounter-start="639499"
                                        data-purecounter-end="63939379"><CountUp end={643.24} duration={3}/></span> </h3>
                                <p>Total Value Locked</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="stacking__project-item">
                            <div className="stacking__project-itemInner">
                                <h3><span className="purecounter" data-purecounter-start="0"
                                        data-purecounter-end="136.99"><CountUp end={136} duration={3}/></span>.99%</h3>
                                <p>Apy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="stacking__project-item">
                            <div className="stacking__project-itemInner">
                                <h3><span className="purecounter" data-purecounter-start="0"
                                        data-purecounter-end="69899"><CountUp end={69899} duration={3}/></span> </h3>
                                <p>Number of Stakers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stacking__details">
                <div className="stacking__title">
                    <h3>Participate $MART Stack</h3>
                </div>

                <div className="stacking__content">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <div className="stacking__ammount">
                                <p>Total Stack</p>
                                <h4>350.70 BUSD</h4>
                            </div>
                            <div className="stacking__period">
                                <ul className="stacking__period-list nav nav-pills" id="stackingPeriod" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className={showTab === 1?"nav-link active": "nav-link"} id="period-tab1" data-bs-toggle="tab"
                                            data-bs-target="#period-tab1-pane" type="button" role="tab"
                                            onClick={() => setShowtab(1)}
                                            aria-controls="period-tab1-pane" aria-selected="true">30 Days</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={showTab === 2?"nav-link active": "nav-link"} id="period-tab2" data-bs-toggle="tab"
                                            data-bs-target="#period-tab2-pane" type="button" role="tab"
                                            onClick={() => setShowtab(2)}
                                            aria-controls="period-tab2-pane" aria-selected="false">90 Days</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={showTab === 3?"nav-link active": "nav-link"} id="period-tab3" data-bs-toggle="tab"
                                        onClick={() => setShowtab(3)}
                                            data-bs-target="#period-tab3-pane" type="button" role="tab"
                                            aria-controls="period-tab3-pane" aria-selected="false">180 Days</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={showTab === 4?"nav-link active": "nav-link"} id="period-tab4" data-bs-toggle="tab"
                                            onClick={() => setShowtab(4)}
                                            data-bs-target="#period-tab4-pane" type="button" role="tab"
                                            aria-controls="period-tab4-pane" aria-selected="true">365 Days</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className={showTab === 1 ? "tab-pane fade show active": "tab-pane fade"} id="period-tab1-pane" role="tabpanel"
                                        aria-labelledby="period-tab1" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="row align-items-center g-5">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Lock Period:
                                                                <span className="stacking__info-value">30 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Re-locks on registration:
                                                                <span className="stacking__info-value">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Early unstake fee:
                                                                <span className="stacking__info-value">10%</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Status:
                                                                <span className="stacking__info-value">Unlocked</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="stacking__apy">
                                                        <p>APY Rate </p>
                                                        <h3>10%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showTab === 2 ? "tab-pane fade show active": "tab-pane fade"} id="period-tab2-pane" role="tabpanel"
                                        aria-labelledby="period-tab2" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="row align-items-center g-5">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Lock Period:
                                                                <span className="stacking__info-value">90 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Re-locks on registration:
                                                                <span className="stacking__info-value">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Early unstake fee:
                                                                <span className="stacking__info-value">12%</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Status:
                                                                <span className="stacking__info-value">Unlocked</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="stacking__apy">
                                                        <p>APY Rate </p>
                                                        <h3>12%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showTab === 3 ?"tab-pane fade show active": "tab-pane fade"} id="period-tab3-pane" role="tabpanel"
                                        aria-labelledby="period-tab3" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="row align-items-center g-5">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Lock Period:
                                                                <span className="stacking__info-value">180 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Re-locks on registration:
                                                                <span className="stacking__info-value">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Early unstake fee:
                                                                <span className="stacking__info-value">15%</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Status:
                                                                <span className="stacking__info-value">Unlocked</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="stacking__apy">
                                                        <p>APY Rate </p>
                                                        <h3>15%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={showTab === 4 ?"tab-pane fade show active": "tab-pane fade"} id="period-tab4-pane" role="tabpanel"
                                        aria-labelledby="period-tab4" tabindex="0">
                                        <div className="stacking__info">
                                            <div className="row align-items-center g-5">
                                                <div className="col-sm-8">
                                                    <ul className="stacking__info-list">
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Lock Period:
                                                                <span className="stacking__info-value">365 Days</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Re-locks on registration:
                                                                <span className="stacking__info-value">Yes</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Early unstake fee:
                                                                <span className="stacking__info-value">20%</span>
                                                            </p>
                                                        </li>
                                                        <li className="stacking__info-item">
                                                            <p className="stacking__info-name">Status:
                                                                <span className="stacking__info-value">Unlocked</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="stacking__apy">
                                                        <p>APY Rate </p>
                                                        <h3>20%</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8">
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

export default Staking