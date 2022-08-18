import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
  
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
// const Navbar = () => {
//     const handleClick = e => {
//       e.preventDefault();
//       document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
//       document.getElementById('mainListDiv').classList.toggle('show_list');
  
//     }

//     return (
//         <header>
//         <nav className="nav">
//             <div className="container">
//                 <div className="logo">
//                     <NavLink to="/">Home</NavLink>
//                 </div>
//                 <div id="mainListDiv" className="main_list">
//                     <ul className="navlinks">
//                     <li><NavLink to="./pages/about">About</NavLink></li>
//                     <li><NavLink to="/"></NavLink></li>
//                     </ul>
//                 </div>
//                 <span onClick={handleClick} className="navTrigger">
//                     <i></i>
//                     <i></i>
//                     <i></i>
//                 </span>
//             </div>
//         </nav>
//         </header>
//     )
// }

// export default Navbar
