require('dotenv').config();

import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import logo from '/assets/logo.svg';
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';
import UserDashboard from './UserDashboard';
import GroupDashboard from './GroupDashboard';
import 'style/index.css'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState('welcome');

  // Update the document title based on the current page
  useEffect(() => {
    switch (currentPage) {
      case 'welcome':
        document.title = 'Welcome to RADSPLIT'; // title for Welcome page
        break;
      case 'main':
        document.title = 'Main Page - RADSPLIT'; //  title for Main page
        break;
      case 'userDashboard':
        document.title = 'User Dashboard - RADSPLIT'; //   title for User Dashboard
        break;
      case 'groupDashboard':
        document.title = 'Group Dashboard - RADSPLIT'; //  title for Group Dashboard
        break;
      default:
        document.title = 'Welcome to RADSPLIT'; // Default title
    }
  }, [currentPage]); // Run effect whenever currentPage changes

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage setPage={setCurrentPage} />;
      case 'main':
        return <MainPage setPage={setCurrentPage} />;
      case 'userDashboard':
        return <UserDashboard setPage={setCurrentPage} />;
      case 'groupDashboard':
        return <GroupDashboard setPage={setCurrentPage} />;
      default:
        return <WelcomePage setPage={setCurrentPage} />;
    }
  };

  const goBack = () => {
    if (currentPage === 'main') setCurrentPage('welcome');
    else if (currentPage === 'userDashboard') setCurrentPage('main');
    else if (currentPage === 'groupDashboard') setCurrentPage('main');
  };

  return (
    <div className="app-container">
      <button className="black-button" onClick={goBack}>
        ←
      </button>
      <img src={logo} alt="Logo de Radix" className="logo" />
      {renderPage()}
    </div>
  );
};

export default App;