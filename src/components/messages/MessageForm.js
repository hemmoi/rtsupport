import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

class MessageForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.message;
        const message = node.value;
        const time = moment().format('HH:mm DD/MM/YY');
        const {activeUser, activeChannel} = this.props;
        if (!_.isEmpty(activeUser) && !_.isEmpty(activeChannel)) {
            this
                .props
                .addMessage(time, activeUser.name, message, activeChannel.name);
            node.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this
                .onSubmit
                .bind(this)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        placeholder='Add Message'
                        type="text"
                        ref="message"/>
                </div>
            </form>
        )

    }
}

MessageForm.propTypes = {
    addMessage: PropTypes.func.isRequired,
    activeUser: PropTypes.object.isRequired,
    activeChannel: PropTypes.object.isRequired

}

export default MessageForm