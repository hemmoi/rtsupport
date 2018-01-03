import React, {Component} from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.filterByChannel = this.filterByChannel.bind(this);
    }

    filterByChannel(messages, activeChannel) {
        return messages.filter((message) => {
            if (message.channel === activeChannel.name) {
                return true;
            } else {
                return false;
            }
        })
    }
    
    render() {
        const {messages, activeChannel} = this.props;
        const filteredMessages = this
            .filterByChannel(messages, activeChannel);
        return (
            <ul>
                {filteredMessages.map(msg => {
                    return <Message message={msg} key={msg.id} {...this.props}></Message>
                })}
            </ul>
        )
    }
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
    activeChannel: PropTypes.object.isRequired
}

export default MessageList