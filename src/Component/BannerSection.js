import React,{useEffect} from 'react'


import AOS, { init } from 'aos';
import 'aos/dist/aos.css';


const BannerSection = () => {

    useEffect(() =>{
        AOS.init({duration: 2000})
        },[])
  return (
    <section className="banner" id="home" style={{backgroundImage: ''}}>
        <div className="container">
            <div className="banner__wrapper">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="banner__content" data-aos="fade-right">
                            <h1 className="text-uppercase">Cryptocurrency <br/> revolutionized  <br/>the  finance</h1>
                            <p>it offers a new horizon of opportunities untethered from traditional
financial constraints </p>
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner__thumb" >
                            <img src="assets/images/banner/banner-thumb/rocket.png" alt="banner Image"/>

                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='topHeading'>
                <h2>100% Secure</h2>
                <p>Our smart contract has been fully audited by an independent 
                     <br/> third-party company and all findings have been resolved and is shown to be secure.</p>

            </div>
           <div className='pdfDiv' data-aos="fade-right">
            
           <div className='whitePaper'>
               <div className='textstyle'>
                <h2>WHITE PAPER</h2>
                
                
                <div className='pdfBox'>
                <a href='/Documents/SMART.pdf'target="_blank"> 
                
                <img src='\assets\images\banner\icon_kyc_5.png' className='pdfIcon_image'/> 
                  </a>
                <h6>PDF</h6>
                <a  href='/Documents/SMART.pdf'target="_blank"> 
                <img src='\assets\images\banner\icon_kyc_4.png' className='pdfIcon_image'/>
                </a>
                    </div>
               </div>
              
               <div className='textDiv'>
              <p> Download our whitepaper to get a detailed <br/>understanding of smartstaking</p>
              <img src='\assets\images\banner\icon_kyc_stack.png' className='pdfIcon_stack'/>  
               </div>
            </div>

            <div className='auditClass'>
            <div className='aduitbox'>
            <h2>AUDIT REPORT</h2>
            <div>
            <div className='pdfBox'>
                <a  href='\documents\AUDIT.pdf'  target="_blank"> 
                <img src='\assets\images\banner\icon_kyc_5.png' className='pdfIcon_image'/>    
                </a>
                <h6>Approved</h6>
                <a href='\documents\AUDIT.pdf' target="_blank">
                <img src='\assets\images\banner\icon_kyc_4.png' className='pdfIcon_image'/>  
                 </a>
                    </div>
                    </div>
            </div>
            <div className="textDivAudit">
                <p>The  smart contract has been audited by blockchain <br/> security specialist Solid Proof</p>
                <img src='\assets\images\banner\icon_audit_report.png' className='pdfIcon_audit'/>  
            </div>
            </div>
           
           
           </div>
        </div>
    </section>
  )
}

export default BannerSection