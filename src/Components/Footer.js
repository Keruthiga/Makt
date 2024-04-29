import React from 'react'

function Footer() {
  return (
    <div>
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
                <div className='top-icon'><a href='#home'><i class="fa-solid fa-circle-arrow-up"></i></a></div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
