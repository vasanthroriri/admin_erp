import React, { useState } from 'react';

const Sidebar = () => {
  // State to track whether the sidebar is collapsed
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Function to toggle sidebar collapse
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`sidebar-wrapper ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div>
          <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h4 className="logo-text">Syndron</h4>
        </div>
        <div className="toggle-icon ms-auto" onClick={toggleSidebar}>
          <i className={`bx ${isSidebarCollapsed ? 'bx-arrow-right' : 'bx-arrow-back'}`}></i>
        </div>
      </div>
      <ul className="metismenu" id="menu">
        <li>
          <a href="javascript:;" className="has-arrow">
            <div className="parent-icon">
              <i className="bx bx-home-alt"></i>
            </div>
            <div className="menu-title">Dashboard</div>
          </a>
          <ul>
            <li>
              <a href="index.html">
                <i className="bx bx-radio-circle"></i> eCommerce
              </a>
            </li>
            <li>
              <a href="index2.html">
                <i className="bx bx-radio-circle"></i> Analytics
              </a>
            </li>
          </ul>
        </li>
        {/* Add more sidebar menu items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
