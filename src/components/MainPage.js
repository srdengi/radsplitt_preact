import { h } from 'preact';

const MainPage = ({ setPage }) => {
  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={() => setPage('userDashboard')}>Join a Group</button>
      <button onClick={() => setPage('groupDashboard')}>Create Group</button>
    </div>
  );
};

export default MainPage;
