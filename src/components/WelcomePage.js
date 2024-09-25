import { h } from 'preact';

const WelcomePage = ({ setPage }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => setPage('main')}>Connect Wallet</button>
      <button onClick={() => alert('Create Wallet')}>Create Wallet</button>
    </div>
  );
};

export default WelcomePage;
