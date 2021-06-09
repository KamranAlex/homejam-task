import React from 'react';
import './Navbar.css';
import logo from '../../../images/homejam_logo.png';

const Navbar = () => {
  return (
    <div className='stickyNav'>
      <div className='topNav'>
        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <nav className='navbar navbar-expand-lg navbar-light justify-content-between '>
              <img src={logo} alt='' />
              <div>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                  <ul className='navbar-nav'>
                    <li className='nav-item active'>
                      <a className='nav-link' href='#'>
                        Home <span className='sr-only'>(current)</span>
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='#'>
                        Features
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='#'>
                        Pricing
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link disabled' href='#'>
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
