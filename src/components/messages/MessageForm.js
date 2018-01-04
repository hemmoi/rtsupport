import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class MessageForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.message;
        const body = node.value;
        const {activeUser, activeChannel} = this.props;
        if (!_.isEmpty(activeUser) && !_.isEmpty(activeChannel)) {
            this
                .props
                .addMessage(body);
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