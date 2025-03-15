// import { useState } from "react";
// import { to } from "react-router-dom"; 
// import { GiHamburgerMenu } from "react-icons/gi";

// export default function Header() {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleButtonToggle = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <header>
//       <div className="container">
//         <div className="grid navbar-grid">
//           <div className="logo">
//             <img
//               src="/public/img/Picsart_25-02-15_18-51-32-127.png"
//               alt="Logo"
//               className="logo-img"
//             />
//           </div>

//           <nav className={showMenu ? "menu-mobile" : "menu-web"}>
//             <ul>
//               <li>
//                 <to to="/">Home</to>
//               </li>
//               <li>
//                 <to to="/about-us">About</to>
//               </li>
//               <li>
//                 <to to="/services">Services</to>
//               </li>
//               <li>
//                 <Link
//                   target="_blank"
//                   to="https://www.instagram.com/thapatechnical/"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           <div className="ham-menu">
//             <button onClick={handleButtonToggle}>
//               <GiHamburgerMenu size="4rem" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }













// import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";

// export default function Header() {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleButtonToggle = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <header>
//       <div className="container">
//         <div className="grid navbar-grid">
//           <div className="logo">
//             <img
//               src="/public/img/Picsart_25-02-15_18-51-32-127.png" // Path to your logo image
//               alt="Logo" // Alt text for accessibility
//               className="logo-img" // Added class for styling  
//             />
//           </div>

//           <nav className={showMenu ? "menu-mobile" : "menu-web"}>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="about-us">About</Link>
//               </li>
//               <li>
//                 <Link to="services">Services</Link>
//               </li>
//               <li>
//                 <Link
//                   target="_blank"
//                   to="https://www.instagram.com/thapatechnical/"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           <div className="ham-menu">
//             <button onClick={handleButtonToggle} >
//               <GiHamburgerMenu size="3.2rem" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }  



















// import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger and cross icons 
// import { RxCross1 } from "react-icons/rx";

// import { Link } from "react-router-dom";
// export default function Header() {
//   const [showMenu, setShowMenu] = useState(false); // State to toggle menu visibility

//   const handleButtonToggle = () => {
//     setShowMenu(!showMenu); // Toggle menu state
//   };

//   return (
//     <header>
//       <div className="container">
//         <div className="grid navbar-grid">
//           <div className="logo">
//             <img
//               src="/public/img/Picsart_25-02-15_18-51-32-127.png"
//               alt="Logo"
//               className="logo-img"
//             />
//           </div>

//           <nav className={showMenu ? "menu-mobile" : "menu-web"}>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="about-us">About</Link>
//               </li>
//               <li>
//                 <Link to="#">Services</Link>
//               </li>
//               <li>
//                 <Link
//                   target="_blank"
//                   to="https://www.instagram.com/thapatechnical/"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           <div className="ham-menu">
//             <button onClick={handleButtonToggle}>
//               {/* Toggle between hamburger and cross icons */}
//               {showMenu ? (
//                 <RxCross1  size="3.2rem" /> // Cross icon when menu is open
//               ) : (
//                 <GiHamburgerMenu size="3.2rem" /> // Hamburger icon when menu is closed
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }   








// import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger icon
// import { RxCross1 } from "react-icons/rx"; // Import cross icon
// import { Link } from "react-router-dom"; // Import Link for routing

// export default function Header() {
//   const [showMenu, setShowMenu] = useState(false); // State to toggle menu visibility

//   const handleButtonToggle = () => {
//     setShowMenu(!showMenu); // Toggle menu state
//   };

//   const closeMenu = () => {
//     setShowMenu(false); // Function to close the menu
//   };

//   return (
//     <header>
//       <div className="container">
//         <div className="grid navbar-grid">
//           <div className="logo">
//             <img
//               src="/public/img/Picsart_25-02-15_18-51-32-127.png"
//               alt="Logo"
//               className="logo-img"
//             />
//           </div>

//           <nav className={showMenu ? "menu-mobile" : "menu-web"}>
//             <ul>
//               <li>
//                 <Link to="/" onClick={closeMenu}> {/* Close menu on click */}
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about-us" onClick={closeMenu}> {/* Close menu on click */}
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" onClick={closeMenu}> {/* Close menu on click */}
//                   Services
//                 </Link>
//               </li>
//               <li>
                
//               </li>
//             </ul>
//           </nav>

//           <div className="ham-menu">
//             <button onClick={handleButtonToggle}>
//               {/* Toggle between hamburger and cross icons */}
//               {showMenu ? (
//                 <RxCross1 size="3.2rem" /> // Cross icon when menu is open
//               ) : (
//                 <GiHamburgerMenu size="3.2rem" /> // Hamburger icon when menu is closed
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }




















import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger icon
import { RxCross1 } from "react-icons/rx"; // Import cross icon
import { Link } from "react-router-dom"; // Import Link for routing

export default function Header() {
  const [showMenu, setShowMenu] = useState(false); // State to toggle menu visibility

  const handleButtonToggle = () => {
    setShowMenu(!showMenu); // Toggle menu state
  };

  const closeMenu = () => {
    setShowMenu(false); // Function to close the menu
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <img
              src="/public/img/logoyoga.png"
              alt="Logo"
              className="logo-img"
            />
          </div>

          {/* Add 'open' class when showMenu is true */}
          <nav className={`menu-mobile ${showMenu ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  // target="_blank"
                  to="/con"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              {/* Toggle between hamburger and cross icons */}
              {showMenu ? (
                <RxCross1 size="3rem" /> // Cross icon when menu is open
              ) : (
                <GiHamburgerMenu size="3.2rem" /> // Hamburger icon when menu is closed
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}



