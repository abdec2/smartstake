import React,{useEffect} from 'react'
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
const Section_3 = () => {

  const copyToClipboard = () => {
    const tokenAddress='0xB4cb05C5BdfE7bB5a89db82C589704EAF29FD983'
    navigator.clipboard.writeText(tokenAddress);
    
  }

  useEffect(() =>{
    AOS.init({duration: 800})
    },[])
  return (
    <section className="project padding-bottom project--completed2">
    <div className="container">
      <div className="section-header section-header--middle">
        <div className="section-header__content">
          <div className="section-header__titlebar">
            <p className="section-header__subtitle"> Tokenomics </p>
            <h2 className="section__header__title">Token Information</h2>
          </div>
        </div>
      </div>
      <div className="project__wrapper">
        <div className="row g-4">
          <div className="col-12">
          <div className=" section-header--middle" style={{maxInlineSize: '600px'}}>
            <div className="section-header__content">
              <div className="section-header__titlebar">
                <p className="section-header__subtitle"> $MART Token Address </p>
                <div className="stacking__approve">
                  <div className="stacking__approve-field">
                      <div className="input-group">
                          <input type="text" disabled className="form-control p-3" aria-label="Approve Stack"
                              id="approve-stack" defaultValue="0xB4cb05C5BdfE7bB5a89db82C589704EAF29FD983" />
                          <button className="input-group-btn text-white" style={{borderColor: 'white', background: 'none'}} onClick={copyToClipboard}>Copy</button>
                      </div>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-12">
            <div className="project__item2 position-relative" data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/allocation.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4>Presale Allocation
                    </h4>
                    <p>Facilitates a decentralized distribution during the public launch.</p>
                  </div>
                </div>
               
                <div className="project__item2-time">
                
                </div>
                {/* project raised ammount */}
                <div className="project__item-amount">
                 
                   
                  <h6><span className="color--theme-color">6,000,000</span> / <span> tokens (60%)
                      </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="project__item2 position-relative"  data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/community_eng.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4> Liquidity
                    </h4>
                    <p>To fortify trading</p>
                  </div>
                </div>
              
                <div className="project__item2-time">
                 
                </div>
                {/* project raised ammount */}
                <div className="project__item-amount">
                 
                  <h6><span className="color--theme-color">1,000,000</span> / <span>tokens (10%)
                      </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="project__item2 position-relative"  data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/product_dev.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4>Staking Rewards
                    </h4>
                    <p>For incentivizing staking and liquidity provision. </p>
                  </div>
                </div>
               
                <div className="project__item2-time">
                  
                </div>
                {/* project raised ammount */}
                <div className="project__item-amount">
                  
                  <h6><span className="color--theme-color">1,500,000</span> / <span>tokens (15%)
                      </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '5%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="project__item2 position-relative"  data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/fair_luanch.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4>Partnerships and Integrations </h4>
                    <p>For potential partnerships, collaborations, and integrations</p>
                  </div>
                </div>
              
                <div className="project__item2-time">
                 
                </div>
                
                <div className="project__item-amount">
                 
                  <h6><span className="color--theme-color">300,000</span> / <span>tokens (3%)</span></h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '3%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="project__item2 position-relative"  data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/team.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4>Marketing and Community Engagement </h4>
                    <p>Funds marketing campaigns, partnerships, events, etc.</p>
                  </div>
                </div>
               
                <div className="project__item2-time">
                 
                </div>
                {/* project raised ammount */}
                <div className="project__item-amount">
                  
                  <h6><span className="color--theme-color">500,000</span> / <span>tokens (5%)
                    </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '5%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="project__item2 position-relative"  data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/team.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4>Incentive Programs </h4>
                    <p>Allocate 2% for periodic incentive programs or events.</p>
                  </div>
                </div>
               
                <div className="project__item2-time">
                 
                </div>
                {/* project raised ammount */}
                <div className="project__item-amount">
                  
                  <h6><span className="color--theme-color">200,000</span> / <span>tokens (2%)
                    </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '2%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="project__item2 position-relative"  data-aos="fade-up" >
              <div className="project__item2-inner">
                {/* project name */}
                <div className="project__item2-name">
                  <div className="project__item2-thumb"><img src="assets/images/igo/author/team.png" alt="Project Image" />
                  </div>
                  <div className="project__item2-content">
                    <h4>Team and product developments </h4>
                    <p>Rewards the core team and supports ongoing development, enhancements, and security.</p>
                  </div>
                </div>
               
                <div className="project__item2-time">
                 
                </div>
                {/* project raised ammount */}
                <div className="project__item-amount">
                  
                  <h6><span className="color--theme-color">500,000</span> / <span>tokens (5%)
                    </span>
                  </h6>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '5%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Section_3