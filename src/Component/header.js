import { useWeb3Modal } from '@web3modal/wagmi/react'
import { Link, NavLink } from "react-router-dom"
import { useAccount } from 'wagmi'


import React, { useState } from 'react';


const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isDisplay, isSetDisplay] = useState(false)
    const { address, isConnecting, isDisconnected } = useAccount()
    const { open } = useWeb3Modal()
    const firtDegit =  address?.slice(0,4)
    const lastDegit =   address?.slice(-6)
  
    return (
      <header className="header-section">
          <div className="container">
              <div className="header-holder">
                  <div className="header-primary d-flex flex-wrap justify-content-between align-items-center">
                      <div className="brand-logo d-none d-lg-inline-block">
                          <div className="logo">
                              <Link to={'/'}>
                              <img src="/assets/images/logo/smartLogo.png" alt="logo" />
                              </Link>
                          </div>
                      </div>
                      <div className="header-wrapper justify-content-lg-end">
                          <div className="mobile-logo d-lg-none" >
                            <Link to={'/'}><img src="/assets/images/logo/smartLogo.png" alt="logo" /></Link>
                          </div>
                          <div className="menu-area">
                              <ul className={isOpen?"menu active" : "menu"}>
                                  <li onClick={() => setIsOpen(false)}>
                                     <NavLink to={'/'}>Home</NavLink>
                                      
                                  </li>
                                  
                                  
                                  <li onClick={() => setIsOpen(false)}>
                                 
                                   
                                  <Link to={'/Staking'} >Staking</Link>  
                                 
                                 
                                      
                                  </li>
                                  <li onClick={() => setIsOpen(false)}>
                                      <Link to={'BuyToken'}>Buy Now</Link>
                                     
                                  </li>
                                  <li onClick={() => setIsOpen(false)}>
                                     <Link to={'Team'}> Team</Link>
                                      
                                  </li>
                                  <li onClick={() => setIsOpen(false)}>
                                  <Link to={'BlogPost'}>Blog</Link>    
                                      
                                  </li>
                                 
                                  <li>
                                  <Link to={'/KnowledgeBase'} onClick={() => setIsOpen(false)}>knowledge base</Link>  
                                      
                                  </li>
                                  
                                 

                                  <li onClick={() => setIsOpen(false)}> <Link to={'Contact'}> Contact</Link></li>
                                
                              </ul>
                              <a className="wallet-btn" onClick={() => open()} data-bs-toggle="modal" data-bs-target="#wallet-option">
                              
                                  <span >{isDisconnected? "Connect" :`${firtDegit}...${lastDegit}`}
                                  </span> <i className="fa-solid fa-wallet"></i></a>
  
                                 
                              <div className={isOpen? "active  header-bar d-lg-none" : "header-bar d-lg-none"} onClick={() => setIsOpen(!isOpen)} >
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                          </div>
                      </div>
  
                  </div>
              </div>
          </div>
  
      </header>
    )
  }
  
  export default HeaderComponent 