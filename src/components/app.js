import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import logo from '/assets/logo.svg'; // Asegúrate de que la ruta sea correcta
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';
import UserDashboard from './UserDashboard';
import GroupDashboard from './GroupDashboard';
import 'style/index.css'; // Asegúrate de que el archivo CSS esté importado

const App = () => {
  const [currentPage, setCurrentPage] = useState('welcome');

  // Update the document title based on the current page
  useEffect(() => {
    switch (currentPage) {
      case 'welcome':
        document.title = 'Welcome to RADSPLIT'; // Set your title for Welcome page
        break;
      case 'main':
        document.title = 'Main Page - RADSPLIT'; // Set your title for Main page
        break;
      case 'userDashboard':
        document.title = 'User Dashboard - RADSPLIT'; // Set your title for User Dashboard
        break;
      case 'groupDashboard':
        document.title = 'Group Dashboard - RADSPLIT'; // Set your title for Group Dashboard
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
    // Aquí puedes definir la lógica para regresar a la página anterior
    if (currentPage === 'main') setCurrentPage('welcome');
    else if (currentPage === 'userDashboard') setCurrentPage('main');
    else if (currentPage === 'groupDashboard') setCurrentPage('main');
    // Agrega más condiciones según sea necesario
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