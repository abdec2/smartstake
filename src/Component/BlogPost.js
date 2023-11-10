import React,{useState} from 'react'

const BlogPost = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    
    const URL = 'https://script.google.com/macros/s/AKfycbzFDkudSCf3cMtcFpYtqqIgHpwpdBF8Iu6jN3lfBq44A4oftMU2WwdRsPH41G6gnjB5/exec'

    console.log("check the result",name, email, message)
    const handleSubmit = async (e) => {
        e.preventDefault();
          const data = {
            name,
            email,
            message,
          }
            console.log("data check",data)
            const response = await fetch(URL, {
                redirect: "follow",
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
              });
         console.log(response.json)
        if (response.status === 200) {
          alert('Message sent successfully');
          setName('')
          setEmail('')
          setMessage('')
        } else {
          alert('Failed to send the message');
        }
    }

  return (
    

<div className="blog padding-top padding-bottom">
        <div className="container">
            <div className="blog__wrapper">
                <div className="row ">
                    <div className="col-lg-8">
                        <article>
                            <div className="post-item-2">
                                <div className="post-inner">
                                    <div className="post-thumb mb-30 px-30 pt-30">
                                        <img src="assets/images/blog/single/Dapp.png" alt="blog"/>
                                    </div>
                                    <div className="post-content pt-0">
                                        <h3> Staking and DApp Development</h3>
                                        <ul className="blog__meta d-flex flex-wrap align-items-center mb-4">
                                            
                                            
                                        </ul>
                                        <p> Staking allows users to lock away a specified amount of $SMART in return for financial
rewards to maximize the potential of their holdings. At its core, staking will offer a dual
advantage; it serves as a mechanism for securing the network while simultaneously rewarding
participants with additional tokens.
</p>
                                        <blockquote className="single-quote mb-30">
                                            <div className="quotes">
                                            By Q2, 2024, Smart Staking will introduce an external DApp, enabling holders to stake their
tokens and reap the rewards seamlessly. However, our focus isn't just on staking; it's about
creating a system where every stakeholder finds value
                                            </div>
                                           
                                        </blockquote>
                                        <p>When holders stake their tokens, they
don't just earn passively; they contribute to the overall stability and health of the platform.
What makes Smart Staking different is that investors will earn both BUSD and the native
$MART token, ensuring diverse income streams. This approach mirrors the ethos of depositing
in a high-yield savings account but within the decentralized realm, blending traditional
finance's stability with crypto's innovation.</p>
                                        

                                      


                                    </div>
                                </div>
                            </div>
                            
                            

                            <div id="respond" className="comment-respond">
                                <h4 className="h7">Leave a Comment</h4>
                                <div className="add-comment">
                                    <form onSubmit={handleSubmit} id="commentform" className="comment-form">
                                        <input name="name" type="text"  placeholder="Name*"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        />
                                        <input name="email" type="text"  placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <textarea id="comment-reply" name="comment" rows="7"
                                         value={message}
                                         onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Type Here Your Comment*"></textarea>
                                        <button type="submit" className="default-btn"><span>Send Comment</span></button>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4">
                        <aside className="ps-lg-4">

                        
                            <div className="widget widget-category">
                                <div className="widget__header">
                                    <h5 className='postCategory'>Post Categories</h5>
                                </div>
                                <ul className="lab-ul widget-wrapper list-bg-none">
                                   
                                    <div className='listDiv'>
                                        
                                       <div className='listImgDiv'>
                                        <img src='assets/images/logo/advertising.png' className="blogImageIcon"/>
                                        <span> Marketing</span>
                                        </div>     
                                       <span>2%</span>
                                    </div>
                                    <div className='listDiv'>
                                        
                                       <div className='listImgDiv'>
                                        <img src='assets/images/logo/water-rate.png' className="blogImageIcon"/>
                                        <span> Liquidity Addition</span>
                                        </div>     
                                       <span>1%</span>
                                    </div>
                                    

                                    <div className='listDiv'>
                                        
                                        <div className='listImgDiv'>
                                         <img src='assets/images/logo/fire.png' className="blogImageIcon"/>
                                         <span> Token Burn</span>
                                         </div>     
                                        <span>1%</span>
                                     </div>

                                     <div className='listDiv'>
                                        
                                        <div className='listImgDiv'>
                                         <img src='assets/images/logo/development.png' className="blogImageIcon"/>
                                         <span> Project Development</span>
                                         </div>     
                                        <span>2%</span>
                                     </div>

                                     <div className='listDiv'>
                                        
                                        <div className='listImgDiv'>
                                         <img src='assets/images/logo/gas.png' className="blogImageIcon"/>
                                         <span> Redistribution in BUSD</span>
                                         </div>     
                                        <span>4%</span>
                                     </div>
                                    
                                    
                                    
                                   
                                </ul>
                            </div>




                           




                          
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default BlogPost