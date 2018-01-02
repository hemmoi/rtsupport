import React, {Component} from 'react';
import MessageForm from './MessageForm';
import MessagesList from './MessagesList';
import PropTypes from 'prop-types';

class MessagesSection extends Component {
    render() {
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Heading</strong>
                </div>
                <div className='panel-body messages'>
                    <MessagesList {...this.props}/>
                    <MessageForm {...this.props}/>
                </div>

            </div>
        )
    }
}

MessagesSection.propTypes = {
    addMessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
}

export default MessagesSection