import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const UserInput = ({user, onUserChange}) => (
    <Fragment>
        <span>User name</span>
        <input type="text" value={user} onChange={onUserChange} />
    </Fragment>
);

UserInput.propTypes = {
    user: PropTypes.string,
    onUserChange: PropTypes.func,
}

export default UserInput;