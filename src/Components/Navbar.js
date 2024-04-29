// import React from 'react'


// function Navbar() {
//   return (
//     <div>
//         <nav className="fixed-navbar">
//             <ul className="navbar-group">
//                 <li className='logo'>Flowbite <span className='spl-text'>logo</span></li>
//             </ul>
//             <ul className="navbar-group ">
//                 <li className='navbar-li'>Home</li>
//                 <li className='navbar-li'>Features</li>
//                 <li className='navbar-li'>Pricing</li>
//                 <li className='navbar-li'>Contact</li>
//                 <li className='navbar-li'>Faq</li>
//             </ul>
//             <ul className="navbar-group">
//                 <button className='btn-home'>Login</button>
//                 <button className='btn-home'>Signup</button>
//             </ul>
//         </nav>
//     </div>
//   )
// }

// export default Navbar
//import React, { useState } from 'react';

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div>
//       <nav className={`fixed-navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
//         <ul className="navbar-group">
//           <li className='logo'>Flowbite <span className='spl-text'>logo</span></li>
//         </ul>
//         <ul className={`navbar-group ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
//           <li className='navbar-li'>Home</li>
//           <li className='navbar-li'>Features</li>
//           <li className='navbar-li'>Pricing</li>
//           <li className='navbar-li'>Contact</li>
//           <li className='navbar-li'>Faq</li>
//         </ul>
//         <ul className={`navbar-group ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
//           <button className='btn-home'>Login</button>
//           <button className='btn-home'>Signup</button>
//         </ul>
//         <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
//         <i class="fa-solid fa-bars"></i>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
