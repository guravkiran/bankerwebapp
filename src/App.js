import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import Sidebar from './Sidebar';
import SignIn from './SignIn';
//import SignOut from './SignOut';
import TopBar from './TopBar';
import './App.css';

const Dashboard = () => <h2>Dashboard Page</h2>;
const Clients = () => <h2>Clients Page</h2>;
const Messages = () => <h2>Messages Page</h2>;
const Calendar = () => <h2>Calendar Page</h2>;

const App = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = accounts.length > 0;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setIsSidebarOpen(true);
    }
  }, [isAuthenticated]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    instance.logoutPopup().catch(e => {
      console.error(e);
    });
  };

  return (
    <Router>
      <div className="App">
        <div>
        {isAuthenticated && <TopBar handleLogout={handleLogout} />}
        </div>
        <div>
        {isAuthenticated && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />} />
            <Route path="/clients" element={isAuthenticated ? <Clients /> : <Navigate to="/signin" />} />
            <Route path="/messages" element={isAuthenticated ? <Messages /> : <Navigate to="/signin" />}  />
            <Route path="/calendar" element={isAuthenticated ? <Calendar /> : <Navigate to="/signin" />}  />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;