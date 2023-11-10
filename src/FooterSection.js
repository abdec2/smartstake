import React from 'react'


const FooterSection = () => {
  return (
    <footer className="footer" style={{backgroundImage: 'url(assets/images/footer/bg.png)'}}>
        <div className="footer__wrapper padding-top padding-bottom">
            <div className="My_container">
                <div className="myclass">
                    <a className="mb-4 d-inline-block" href="index.html"><img src="assets/images/logo/smartLogo.png"
                            alt="Logo"/></a>
                    <ul className="social justify-content-center">
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
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection