import React, {Component} from 'react';
import './App.css';
import ChannelSection from './components/channels/ChannelSection';
import UserSection from './components/users/UserSection';
import MessageSection from './components/messages/MessageSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      messages: [],
      users: [],
      activeUser: {}
    }
    this.addChannel = this
      .addChannel
      .bind(this);
    this.setChannel = this
      .setChannel
      .bind(this);
    this.addMessage = this
      .addMessage
      .bind(this);
    this.addUser = this
      .addUser
      .bind(this);
    this.setUser = this
      .setUser
      .bind(this);
  }

  addChannel(name) {
    const {channels} = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
  }

  setChannel(activeChannel) {
    this.setState({activeChannel})
  }

  addMessage(content) {
    const {messages} = this.state;
    messages.push({id: messages.length, content});
    this.setState({messages});
  }

  addUser(name) {
    const {users} = this.state;
    users.push({id: users.length, name});
    this.setState({users});
  }

  setUser(activeUser) {
    this.setState({activeUser})
  }

  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            addChannel={this.addChannel}
            setChannel={this.setChannel}/>
          <UserSection {...this.state} addUser={this.addUser} setUser={this.setUser}/>
        </div>
        <div className='messages-container'>
          <MessageSection {...this.state} addMessage={this.addMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
