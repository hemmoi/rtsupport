import React, { Component } from 'react';
import './App.css';
import ChannelSection from './components/channels/ChannelSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    }
    this.addChannel = this.addChannel.bind(this);
    this.setChannel = this.setChannel.bind(this);
  }

  addChannel(name) {
    const {channels} = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
  }

  setChannel(activeChannel) {
    this.setState({activeChannel})
  }

  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection 
            channels={this.state.channels}
            addChannel= {this.addChannel}
            setChannel= {this.setChannel}
          />
        </div>
      </div>
    );
  }
}

export default App;
