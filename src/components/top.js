import React from 'react';
import 'boxicons/css/boxicons.min.css'; // If you're using Boxicons

function Header() {
  const handleSearchClick = () => {
    console.log('Search clicked');
  };

  return (
    <header>
      <div className="topbar d-flex align-items-center">
        <nav className="navbar navbar-expand gap-3">
          <div className="mobile-toggle-menu"><i className='bx bx-menu'></i></div>

          <div className="top-menu ms-auto">
            <ul className="navbar-nav align-items-center gap-1">
              <li className="nav-item mobile-search-icon d-flex d-lg-none" data-bs-toggle="modal" data-bs-target="#SearchModal">
                <button className="nav-link" onClick={handleSearchClick}>
                  <i className='bx bx-search'></i>
                </button>
              </li>
            </ul>
          </div>

          <div className="user-box dropdown px-3">
            <a className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="assets/images/avatars/avatar-2.png" className="user-img" alt="user avatar" />
              <div className="user-info">
                <p className="user-name mb-0">Pauline Seitz</p>
                <p className="designattion mb-0">Web Designer</p>
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-user fs-5"></i><span>Profile</span></a></li>
              <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-cog fs-5"></i><span>Settings</span></a></li>
              <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-home-circle fs-5"></i><span>Dashboard</span></a></li>
              <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-dollar-circle fs-5"></i><span>Earnings</span></a></li>
              <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-download fs-5"></i><span>Downloads</span></a></li>
              <li><div className="dropdown-divider mb-0"></div></li>
              <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-log-out-circle"></i><span>Logout</span></a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
