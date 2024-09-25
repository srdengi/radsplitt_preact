import { h } from 'preact';

const UserDashboard = ({ setPage }) => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={() => alert('Add Funds')}>Add Funds</button>
      <button onClick={() => alert('Scan QR Group')}>Scan QR Group</button>
    </div>
  );
};

export default UserDashboard;
