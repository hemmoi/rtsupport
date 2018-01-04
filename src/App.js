import React, {Component} from 'react';
import './App.css';
import ChannelSection from './components/channels/ChannelSection';
import UserSection from './components/users/UserSection';
import MessageSection from './components/messages/MessageSection';
import Socket from './socket';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      messages: [],
      users: [],
      activeUser: {},
      connected: false
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

  componentDidMount() {
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('channel add', this.onAddChannel.bind(this));
    socket.on('user add', this.onAddUser.bind(this));
    socket.on('user edit', this.onEditUser.bind(this));
    socket.on('user remove', this.onRemoveUser.bind(this));
    socket.on('message add', this.onMessageAdd.bind(this));
  }

  onAddUser(user) {
    let {users} = this.state;
    users.push(user);
    this.setState({users});
  }

  onMessageAdd(message) {
    let {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }

  onEditUser(editUser) {
    let {users} = this.state;
    users = users.map(user => {
      if (user.id === editUser.id) {
        return editUser
      }
      return users;
    })
    this.setState({users});
  }

  onRemoveUser(removeUser) {
    let {users} = this.state;
    users = users.filter(user => {
      return users.id !== removeUser.id;
    })
    this.setState({users});
  }

  onConnect() {
    this.setState({connected: true});
    this
      .socket
      .emit('channel subscribe');
    this
      .socket
      .emit('user subscribe');
  }

  onDisconnect() {
    this.setState({connected: false});
  }

  onAddChannel(channel) {
    let {channels} = this.state;
    channels.push(channel);
    this.setState({channels});
  }

  addChannel(name) {
    this
      .socket
      .emit('channel add', {name});
  }

  setChannel(activeChannel) {
    this.setState({activeChannel});
    this
      .socket
      .emit('message unsubscribe');
    this.setState({messages: []});
    this
      .socket
      .emit('message subscribe', {channelId: activeChannel.id});
  }

  addMessage(body) {
    let {activeChannel} = this.state;
    this
      .socket
      .emit('message add', {
        channelId: activeChannel.id,
        body
      });
  }

  addUser(name) {
    this
      .socket
      .emit('user edit', {name});
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
        <MessageSection {...this.state} addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default App;
