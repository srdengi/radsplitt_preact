import { h, Component } from 'preact';
import { createGroup } from './services/radix'; // Make sure to create this file

class GroupDashboard extends Component {
  state = {
    groupName: '',
    members: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createGroup(this.state.groupName, this.state.members.split(','));
      console.log('Group created:', result);
      // Handle success (e.g., show a success message, clear form)
      this.setState({ groupName: '', members: '' });
    } catch (error) {
      console.error('Error creating group:', error);
      // Handle error (e.g., show error message)
    }
  };

  render() {
    return (
      <div>
        <h1>Group Dashboard</h1>
        <button onClick={() => alert('Add Wallet')}>Add Wallet</button>
        <button onClick={() => alert('Claim Funds')}>Claim Funds</button>
        <button onClick={() => alert('Delete Group')}>Delete Group</button>
        <button onClick={() => alert('QR Identity')}>QR Identity</button>

        <h2>Create New Group</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.groupName}
            onInput={e => this.setState({ groupName: e.target.value })}
            placeholder="Group Name"
          />
          <input
            type="text"
            value={this.state.members}
            onInput={e => this.setState({ members: e.target.value })}
            placeholder="Member addresses (comma-separated)"
          />
          <button type="submit">Create Group</button>
        </form>
      </div>
    );
  }
}

export default GroupDashboard;