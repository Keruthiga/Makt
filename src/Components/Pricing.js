import React from 'react'
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';




function Pricing() {
  const [showMonthly, setShowMonthly] = useState(false);
  return (
    <div className='pricing-content' id='pricing'>
        <div className='home-box4'>
            <h1 className='home-text2'>Affordable Pricing</h1>
            <p className='home-box4-text'>Save up to %20 for a limited time.</p>
            <div className='home-box4-filter'>
                <a href='#monthly' onClick={() => setShowMonthly(true)}>Monthly</a>
                <a href='#yearly' onClick={() => setShowMonthly(false)}>Yearly</a>
            </div>
            <div className='home-box4-filter-content'>
            <div id='monthly' style={{ display: showMonthly ? 'block' : 'none' }}>
                    <div className='home-box4-grid-container'>
                        <div className='home-box4-grid-item'>
                            <p className='home-box4-grid-item-text'>Basic</p>
                            <h1>$29<span style={{fontSize:'22px'}}>/month</span></h1>
                            <p style={{fontSize:"16px",color:"#4d4d4d",fontWeight:"400",marginTop:"20px"}}>The cheapest way to get started.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p style={{color:"#9d9d9d"}}><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p style={{color:"#9d9d9d"}}><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button className='grad-btn'>Join This Plan</button>
                        </div>
                        <div className='home-box4-grid-item active-plan'>
                            <p className='home-box4-grid-item-text'>Standard</p>
                            <h1 style={{color:"#fff"}}> $49<span style={{fontSize:'22px'}}>/month</span></h1>
                            <p style={{fontSize:"16px",fontWeight:"400",marginTop:"20px"}}>the most popular plan.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button >Join This Plan</button>
                        </div>
                        <div className='home-box4-grid-item'>
                            <p className='home-box4-grid-item-text'>Enterprise</p>
                            <h1>$89<span style={{fontSize:'22px'}}>/month</span></h1>
                            <p style={{fontSize:"16px",color:"#4d4d4d",fontWeight:"400",marginTop:"20px"}}>Contact us for more informations.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button className='grad-btn'>Join This Plan</button>
                        </div>

                    </div>
                </div>
                <div id='yearly' style={{ display: showMonthly ? 'none' : 'block' }}>
                <div className='home-box4-grid-container'>
                        <div className='home-box4-grid-item'>
                            <p className='home-box4-grid-item-text'>Basic</p>
                            <h1>$300<span style={{fontSize:'22px'}}>/year</span></h1>
                            <p style={{fontSize:"16px",color:"#4d4d4d",fontWeight:"400",marginTop:"20px"}}>The cheapest way to get started.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p style={{color:"#9d9d9d"}}><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p style={{color:"#9d9d9d"}}><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button className='grad-btn'>Join This Plan</button>
                        </div>
                        <div className='home-box4-grid-item active-plan'>
                            <p className='home-box4-grid-item-text'>Standard</p>
                            <h1 style={{color:"#fff"}}> $569<span style={{fontSize:'22px'}}>/year</span></h1>
                            <p style={{fontSize:"16px",fontWeight:"400",marginTop:"20px"}}>the most popular plan.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button >Join This Plan</button>
                        </div>
                        <div className='home-box4-grid-item'>
                            <p className='home-box4-grid-item-text'>Enterprise</p>
                            <h1>$999<span style={{fontSize:'22px'}}>/year</span></h1>
                            <p style={{fontSize:"16px",color:"#4d4d4d",fontWeight:"400",marginTop:"20px"}}>Contact us for more informations.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button className='grad-btn'>Join This Plan</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='contact-faq'>
            <h1 className='pricing-head'>FAQ</h1>
            <p className='pricing-text'>Frequently asked questions</p>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='accordion-head'>What types of content can I generate using your AI content generation website?</Accordion.Header>
                    <Accordion.Body className='accordion-text'>
                    Our Genoer offers a wide range of content generation capabilities. You can use it to generate code, written content, images, and convert voice to text or text to voice. Whether you need assistance with programming, content creation, multimedia generation, or transcription tasks, our AI-powered tools have you covered.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='accordion-head'>Can I use the content generated by your AI for SEO purposes?</Accordion.Header>
                    <Accordion.Body className='accordion-text'>
                    Yes, many of our users leverage the generated content for SEO purposes. You can create SEO-friendly content with relevant keywords and optimize it further as needed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='accordion-head'>How do I get started with your AI content generation website?</Accordion.Header>
                    <Accordion.Body className='accordion-text'>
                    Getting started is simple. Just sign up for an account, choose the specific tool you need (e.g., code generation, content creation, image generation), and follow the intuitive prompts to input your requirements. Our user-friendly interface makes it easy to start generating content right away.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className='accordion-head'>Can I customize the output generated by your AI?</Accordion.Header>
                    <Accordion.Body className='accordion-text'>
                    Yes, you have the flexibility to customize the output to meet your specific needs. You can fine-tune parameters, select style preferences, and even provide guidelines to ensure the generated content aligns with your unique requirements and brand voice.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header className='accordion-head'>Is there a limit to how much content I can generate?</Accordion.Header>
                    <Accordion.Body className='accordion-text'>
                    We offer various pricing plans to suit different usage levels, from individual to business needs. While there may be some usage limits depending on your subscription, you can always upgrade to a plan that accommodates higher content generation requirements. Our goal is to ensure you have the resources you need to get the job done efficiently.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
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
                <div className='top-icon'><a href='#pricing'><i class="fa-solid fa-circle-arrow-up"></i></a></div>
            </div>
        </footer>
    </div>
  )
}

export default Pricing