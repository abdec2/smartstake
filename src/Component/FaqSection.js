import React,{useState} from 'react'

const FaqSection = () => {
    const  [selected, setSelected] = useState(false) 
    const toggle = (i) =>{
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <section className="faq padding-top padding-bottom shape-1r" id="faq">
    <div className="container">
        <div className="section-header section-header--middle">
            <div className="section-header__content">
                <div className="section-header__titlebar">
                    <p className="section-header__subtitle"> Faq</p>
                    <h2 className="section__header__title"> Common Queries</h2>
                </div>
          
    </div>
    </div>
    <div className='faqs'>
    <div className='Content'>
        {data.map((item ,i) => (
            <div className='item'>
            <div className='title' key={i}onClick={() => toggle(i)}>
            <h5>{item.title}</h5>
        <span>{selected === i? '-':'+'}</span>
            </div>
           <div className={selected === i? 'content1 show':'content1'}>
            <p className='faqParagraph'> {item.content}</p>
           </div>
                
            </div>
            
        ))}
        
    </div>
    </div>
    </div>
</section>
   
  )
}

export default FaqSection


const data = [
    {
    "title": "How does SmartStaking work?",
    "content": "SmartStaking is a platform that allows the everyday person to buy, sell and invest in rare multimillion-dollar timepieces in the same way you would buy a share. This is achieved through the fractionalization of our asset-backed NFTs."
    
},
{
"title": "What is the minimum purchase amount?",
"content": "The minimum trade size is $20 or currency equivalent."
},{
    "title": "Which currencies do you accept?",
    "content": "To purchase smart-stake token in the presale, we accept ETH, USDT or you can pay via credit or debit card. You will be able to purchase watch-backed NFTs using the following currencies: BTC ETH, USDT, USDC, BSC, SHIB, DOGE, UNI"
},
{
    "title": "How many people can join the waitlist?",
    "content": "The waitlist for our beta version of the marketplace will be available for a maximum of 500 users."
},{
    "title": "Will I be able to purchase real watches on the beta platform?",
    "content":"Yes, all watches on the beta version of our platform will be available for physical delivery."
},
{
"title": "Can I take physical delivery of the watch?",
"content": "Yes, you can redeem the watch out of our vault if you hold 100% of the watch NFTs."
},
{
    "title": "Can I use smartstake to get a discount on trading?",
    "content": "Yes you can use the smartstake token to get a discount when purchasing the watch NFTs"
},
{
    "title": "Where can I purchase smartstake tokens?",
    "content": "You can purchase smartstake tokens from the presale, via our website, using the wallet connect function. Once the presale has finished and the token launched, you will be able to purchase WTVR on Uniswap"
}



]