import React from 'react';
import './Navbar.css';
import logo from '../../../images/homejam_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

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
                    <li className='nav-item'>
                      <a className='nav-link' href='/'>
                        <div className='d-flex'>
                          <FontAwesomeIcon
                            icon={faSearch}
                            style={{
                              color: '#FFF',
                              fontSize: '14px',
                              marginTop: '5px',
                              marginRight: '5px'
                            }}
                          />
                          Search
                        </div>
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='/'>
                        Help
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='/'>
                        Account
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='/'>
                        <FontAwesomeIcon
                          icon={faShoppingBag}
                          style={{ color: '#FFF', fontSize: '16px' }}
                        />
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
