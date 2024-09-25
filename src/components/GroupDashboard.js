import { h } from 'preact';

const GroupDashboard = ({ setPage }) => {
  return (
    <div>
      <h1>Group Dashboard</h1>
      <button onClick={() => alert('Add Wallet')}>Add Wallet</button>
      <button onClick={() => alert('Claim Funds')}>Claim Funds</button>
      <button onClick={() => alert('Delete Group')}>Delete Group</button>
      <button onClick={() => alert('QR Identity')}>QR Identity</button>
    </div>
  );
};

export default GroupDashboard;
