import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

    render() {
        const {message} = this.props;
        return (
            <li className="message">
                <div className="author">
                    <strong>
                        {message.user}
                    </strong>
                    <i className="timestamp">
                        {message.time}
                    </i>
                </div>
                <div className="body">
                    {message.content}
                </div>
            </li>
        )

    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}

export default Message