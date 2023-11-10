import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <section className="team padding-top padding-bottom shape-1r">
    <div className="container">
        <div className="section-header section-header--middle">
            <div className="section-header__content">
                <div className="section-header__titlebar">
                    <p className="section-header__subtitle"> Team</p>
                    <h2 className="section__header__title">Meet the Crew</h2>
                </div>
            </div>
        </div>
        <div className="team__wrapper">
            <div className="row justify-content-center g-4">
                <div className="col-lg-3 col-sm-6">
                    <div className="team__item" >
                        <div className="team__thumb">
                            <img src="assets/images/team/person.png" alt="Team Member Image"/>
                        </div>
                        <div className="team__content">
                            
                            <h4><a href="team-member.html">Who am I?</a></h4>
                            
                            
                           <p className='bioButton'> <Link to={"/bio"} className='bioButton'>Bio </Link></p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="team__item" >
                        <div className="team__thumb">
                            <img src="assets/images/team/manager1.png" alt="Team Member Image"/>
                        </div>
                        <div className="team__content">
                            <h4><a href="team-member.html">Nertila Media</a></h4>
                            <p>Social media manager</p>
                          
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="team__item">
                        <div className="team__thumb">
                            <img src="assets/images/team/blockchainDev.png" alt="Team Member Image"/>
                        </div>
                        <div className="team__content">
                            <h4><a href="team-member.html">Noaman Haq</a></h4>
                            <p>Blockchain Developer</p>
                            
                        </div>
                    </div>
                </div>
               

                <div className="col-lg-3 col-sm-6">
                    <div className="team__item">
                        <div className="team__thumb">
                            <img src="assets/images/team/NFTdesigner.png" alt="Team Member Image"/>
                        </div>
                        <div className="team__content">
                            <h4><a href="team-member.html">Soundar Raj</a></h4>
                            <p>NFT designer</p>
                            
                        </div>
                    </div>
                </div>
                
               
               
            </div>
        </div>
    </div>
</section>
  )
}

export default Team