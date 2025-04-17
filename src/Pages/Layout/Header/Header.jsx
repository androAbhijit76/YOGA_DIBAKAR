  


// Fixed Navbar and Hamberger


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
//               src="/img/logoyoga.png"
//               alt="Logo"
//               className="logo-img"
//             />
//           </div>

//           {/* Add 'open' class when showMenu is true */}
//           <nav className={`menu-mobile ${showMenu ? "open" : ""}`}>
//             <ul>
//               <li>
//                 <Link to="/" onClick={closeMenu}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about-us" onClick={closeMenu}>
//                   About
//                 </Link>
//               </li>
//               {/* <li>
//                 <Link to="/services" onClick={closeMenu}>
//                   Services
//                 </Link>
//               </li> */}
//               <li>
//                 <Link
//                   // target="_blank"
//                   to="/con"
//                   onClick={closeMenu}
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
//                 <RxCross1 size="3rem" /> // Cross icon when menu is open
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









































 



















import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // Track if at top of page

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsAtTop(isTop);
      
      // Close menu if open while scrolling away from top
      if (!isTop && showMenu) {
        setShowMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMenu]); // Dependency on showMenu to close it when scrolling

  return (
    <header className={isAtTop ? 'visible' : 'hidden'}>
      {/* ... rest of your JSX remains the same ... */}   





      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <img
              src="/img/logoyoga.png"
              alt="Logo"
              className="logo-img"
            />
          </div>

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
                <Link to="/con" onClick={closeMenu}>
                  Contact
                </Link>
              </li>   
              <li>
                <Link to="/course" onClick={closeMenu}>
                  Course
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              {showMenu ? (
                <RxCross1 size="3rem" />
              ) : (
                <GiHamburgerMenu size="3.2rem" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}