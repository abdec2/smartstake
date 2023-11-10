import React,{useState} from 'react'


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const URL = 'https://script.google.com/macros/s/AKfycbzFDkudSCf3cMtcFpYtqqIgHpwpdBF8Iu6jN3lfBq44A4oftMU2WwdRsPH41G6gnjB5/exec'

    console.log("check the result",name, email, message)
    const handleSubmit = async (e) => {
        e.preventDefault();
          const data = {
            name,
            email,
            message,
          }
            
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
          setEmail('')
          setName('')
          setMessage('')
        } else {
          alert('Failed to send the message');
        }
      };
  return (
    <section className="contact padding-top padding-bottom">
        <div className="container">
            <div className="section-header section-header--middle">
                <div className="section-header__content">
                    <div className="section-header__titlebar">
                        <h2 className="section__header__title"> Get In Touch
                        </h2>
                    </div>
                </div>
            </div>
            
            <div className="contact__wrapper">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Your Name*" required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Your Email*" required
                                    value={email}
                                     onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                
                                <div className="col-12">
                                    <textarea placeholder="Your Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="default-btn"><span>Send Your Message</span></button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Contact