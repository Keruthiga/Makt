import React from 'react'

function Contact() {
  return (
    <div className='contact-content' id='contact'>
        <h1 className='contact-head'>We are here to answer any question you may have.</h1>
        <div className='contact-box'>
            <div className='contact-box11'>
                <h1>GET IN TOUCH</h1>
                <p>290 Maryam Springs 260,Courbevoie, Paris <i class="fa-solid fa-location-pin"></i></p>
                <p>Email: hello@liquid-themes.com <i class="fa-solid fa-envelope"></i></p>
                <p>Phone: +47 213 5941 295 <i class="fa-solid fa-phone"></i></p>
            </div>
            <div className='contact-box12'>
                <form>
                    <h2>HOW CAN WE HELP</h2>
                    <div className='contact-box121'>
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <input type='text' placeholder='Name'/>
                        </div>
                        <div>
                            <i class="fa-solid fa-mobile"></i>
                            <input type='number' placeholder='Ph.No'/>
                        </div>
                        <div>
                            <i class="fa-solid fa-at"></i>
                            <input type='email' placeholder='Email'/>
                        </div>
                        <div>
                            <i class="fa-solid fa-pen-to-square"></i>
                            <textarea type='text' placeholder='your message' rows={5}/>
                        </div>
                    </div>

                </form>
            </div>

        </div>
        <div className='contact-box-1'>
            <button className='grad-btn'>JOIN THE WAITLIST</button>
            <h1 className='contact-box-1head'>Supercharge your<br/> content generation<br/> process.</h1>
            <p>Join us today and experience the power of AI-powered text <br/>creation for yourself!</p>
        </div>
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Brand Center</li>
                    <li>Blog</li>
                </ul>
                <ul className="footer-links">
                    <li>Discord Server</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Contac Us</li>
                </ul>
                <ul className="footer-links">
                    <li>Privacy Policy</li>
                    <li>Licensing</li>
                    <li>Terms &<br/>
                    Conditions</li>
                </ul>
                <ul className="footer-links">
                    <li>ios</li>
                    <li>Android</li>
                    <li>Windows</li>
                    <li>MacOS</li>
                </ul>
                <div className='footer-box'>
                    <h3>Join with us</h3>
                    <p className='footer-box-text'>To get 5% discount</p>
                    <form className="form-container">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="email-input"
                        />
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
            <div className='footer-right'>
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                <ul className='sm-icon-grp'>
                    <li className='sm-icon'><i class="fa-brands fa-facebook-f"></i></li>
                    <li className='sm-icon'><i class="fa-brands fa-github-alt"></i></li>
                    <li className='sm-icon'><i class="fa-brands fa-gitlab"></i></li>
                    <li className='sm-icon'><i class="fa-brands fa-twitter"></i></li>
                    <li className='sm-icon'><i class="fa-brands fa-linkedin-in"></i></li>
                </ul>
                <div className='top-icon'><a href='#contact'><i class="fa-solid fa-circle-arrow-up"></i></a></div>
            </div>
        </footer>
    </div>
  )
}

export default Contact