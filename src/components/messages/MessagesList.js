import React, {Component} from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class MessageList extends Component {
    render() {
        return (
            <ul>
                {this
                    .props
                    .messages
                    .map(msg => {
                        return <Message message={msg} key={msg.id} {...this.props}></Message>
                    })}
            </ul>
        )
    }
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessageList