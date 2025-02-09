import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '←' : '→'}
      </button>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;