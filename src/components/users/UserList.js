import React, {Component} from 'react';
import User from './User';
import PropTypes from 'prop-types';

class UserList extends Component {
    render() {
        return (
            <ul>
                {this
                    .props
                    .users
                    .map(usr => {
                        return <User user={usr} key={usr.id} {...this.props}></User>
                    })}
            </ul>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    setUser: PropTypes.func.isRequired,
    activeUser: PropTypes.object.isRequired
}

export default UserList