import React from 'react'
import { Link } from 'react-router-dom'


const FooterSection = () => {
  return (
    <footer className="footer" style={{backgroundImage: 'url(assets/images/footer/bg.png)'}}>
        <div className="footer__wrapper padding-top padding-bottom">
            <div className="container">
                <div className="myclass">
                    <Link className="mb-4 d-inline-block" to="/"><img src="assets/images/logo/smartLogo.png" alt="Logo"/></Link>
                    <div className='mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row'>
                        <div className='mx-3 my-2 my-md-0'>
                            <Link to="/our_story" className='text-black'>Our Story</Link>
                        </div>
                        <div className='mx-3 my-2 my-md-0'>
                            <Link to="/about" className='text-black'>About Smart Staking</Link>
                        </div>
                        <div className='mx-3 my-2 my-md-0'>
                            <Link to="/about_staking" className='text-black'>What is staking</Link>
                        </div>
                    </div>
                    <ul className="social align-items-center justify-content-center">
                        <li className="social__item">
                            <a href="https://twitter.com/Smart_Staking" target='_blank' className="social__link"><i className="fab fa-twitter"></i></a>
                        </li>
                        
                        <li className="social__item">
                            <a href=" https://t.me/Smartstaking24" target='_blank' className="social__link"><i className="fab fa-telegram"></i></a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.instagram.com/smartstaking/?igshid=NzZlODBkYWE4Ng%3D%3D" target='_blank' className="social__link"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li className="social__item">
                            <a href="mailto:support@smartstaking.io" target='_blank' className="social__link" ><i className="fa fa-envelope"></i></a>
                        </li>
                        
                    </ul>
                   
                </div>
                {/* <div className='instaDiv'> 
               <img src="assets/images/banner/isntaQR.jpeg" className='instaimage'/>
                </div>  */}
               
            </div>
        </div>
        <div className="footer__copyright">
            <div className="container">
                <div className="text-center py-4">
                    <p className=" mb-0">Smartstaking © 2023 | All Rights Reserved </p>
                    <p className="mb-0">Powered by: <a className='text-primary' href='https://aradchain.tech' target='blank'>Aradchain</a></p>
                </div>
                
            </div>
        </div>
    </footer>
  )
}

export default FooterSection