import React from 'react'
import feaImg from '../Assests/fea.png'
import feaVid from '../Assests/fea-vid.mp4'
import feaBoxImg from '../Assests/fea-box32.png'
import feaBoxImg1 from '../Assests/fea-box33.png'
import feaBoxImg2 from '../Assests/fea-box34.png'



function Features() {
  return (
    <div className='features-content ' id='features'>
        <h1 className='features-head'>AI Image Generator</h1>
        <h4 className='features-head1'>Create stunning images in seconds.</h4>
        <div className='features-image-container'>
            <div className='features-img'>
              <img src={feaImg} alt='fea-img'/>
            </div>
            <div className='features-input-box'>
              <input type='text'placeholder='my name is'/>
              <button>CREATE</button>
            </div>
            <div className='features-box1'>
              <h1 className='features-head'>AI CODE</h1>
              <p className='features-text'>"Streamline your coding process with Genoer assistance. Real-time code suggestions derived from billions of code lines ensure rapid and efficient coding."</p>
              <video autoPlay loop muted  width="1200">
                <source src={feaVid} type="video/mp4" />
              </video>
            </div>
            <div className='features-box2'>
              <h1 className='features-head'>AI Chat</h1>
              <p className='features-text'>"More Proffession In The Same Place"</p>
              <div className='features-icon-container'>
                <div className='features-icon-box'>
                  <i class="fa-solid fa-arrow-up-right-dots"></i>
                  <p>Finance Expert</p>
                </div>
                <div className='features-icon-box'>
                  <i class="fa-solid fa-apple-whole"></i>
                  <p>Nutritionist</p>
                </div>
                <div className='features-icon-box'>
                <i class="fa-solid fa-briefcase"></i>
                <p>carrer counselor</p>
                </div>
                <div className='features-icon-box'>
                <i class="fa-regular fa-clock"></i>
                <p>Time Management Consultant</p>
                </div>
                <div className='features-icon-box'>
                <i class="fa-solid fa-school-circle-check"></i>
                <p>Language Tutor</p>
                <p></p>
                </div>
                <div className='features-icon-box'>
                <i class="fa-solid fa-hat-cowboy"></i>
                <p>CyberSecurity Expert</p>
                </div>
                <div className='features-icon-box'>
                <i class="fa-solid fa-shield-heart"></i>
                <p>Interior Designer</p>
                </div>
                <div className='features-icon-box'>
                <i class="fa-solid fa-headphones"></i>
                <p>Parenting Coach</p>
                </div>
                <div className='features-icon-box'>
                <i class="fa-solid fa-person-running"></i>
                <p>Fitness Trainer</p>
                </div>
                <div className='features-icon-box'>
                <i class="fa-solid fa-plane-departure"></i>
                <p>Travel Advisior</p>
                </div>
                <div className='features-icon-box'>
                <i class="fa-solid fa-sun-plant-wilt"></i>
                <p>Sustainability Expert</p>
                </div>
                <div className='features-icon-box'>
                <i class="fa-solid fa-calendar-check"></i>
                <p>Event Planner</p>
                </div>
                
              </div>
            </div>
            <div className='features-box3'>
              <div className='features-box31'>
              <i class="fa-solid fa-microphone-lines"></i>
              <p className='features-head1' style={{marginBottom:"20px",fontWeight:"bold"}}>AI VOICEOVER</p>
              <p style={{fontWeight:"bold"}}>AI voiceover refers to the use of artificial intelligence to generate human-like voices from text.</p>
                <li><i class="fa-regular fa-circle-check"></i>Creating voiceovers for videos</li>
                <li><i class="fa-regular fa-circle-check"></i>Creating voiceovers for audiobooks</li>
                <li><i class="fa-regular fa-circle-check"></i>Creating voiceovers for interactive content.</li>
              </div>
              <div className='features-box32'>
                <img src={feaBoxImg} alt='feaboximg'/>
              </div>
            </div>
            <div className='features-box3 features-box-3'>
              <div className='features-box31'>
              <i class="fa-solid fa-file"></i>
              <p className='features-head1' style={{marginBottom:"20px",fontWeight:"bold"}}>AI PDF</p>
              <p style={{fontWeight:"bold"}}>AI can help users understand unfamiliar concepts or terms present in PDF documents by providing AI explanations</p>
                <li><i class="fa-regular fa-circle-check"></i>Advanced AI Technology</li>
                <li><i class="fa-regular fa-circle-check"></i>Efficiency and Cost-Effectiveness</li>
                <li><i class="fa-regular fa-circle-check"></i>Versatility.</li>
              </div>
              <div className='features-box32'>
                <img src={feaBoxImg1} alt='feaboximg'/>
              </div>
            </div>
            <div className='features-box3 features-box-31'>
              <div className='features-box31'>
              <p className='features-box31-text'>Total Reference: $3980</p>
              <p className='features-head1' style={{marginBottom:"20px",fontWeight:"bold"}}>Affiliate System</p>
              <p style={{fontWeight:"bold"}}>Ability to invite friends, and earn commission from their first purchase..</p>
               <p>Refer your friends.   start with us.</p>
               <button className='features-box3-btn'>Start Building</button>
              </div>
              <div className='features-box32'>
                <img src={feaBoxImg2} alt='feaboximg'/>
              </div>
            </div>

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
                <div className='top-icon'><a href='#features'><i class="fa-solid fa-circle-arrow-up"></i></a></div>
            </div>
        </footer>
    </div>
  )
}

export default Features