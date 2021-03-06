import React, {Component} from 'react';
import Channel from './Channel';
import PropTypes from 'prop-types';

class ChannelList extends Component {
    render() {
        return (
            <ul>
                {this
                    .props
                    .channels
                    .map(chan => {
                        return <Channel channel={chan} key={chan.id} {...this.props}></Channel>
                    })}
            </ul>
        )
    }
}

ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default ChannelList