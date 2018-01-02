import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

    render() {
        const {message} = this.props;
        return (
            <li >
                {message.content}
            </li>
        )

    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}

export default Message