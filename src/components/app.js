import { h } from 'preact';
import { useState } from 'preact/hooks';
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';
import UserDashboard from './UserDashboard';
import GroupDashboard from './GroupDashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('welcome');

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

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;
