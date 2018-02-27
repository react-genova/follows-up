import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const UserInput = ({user, onUserChange}) => (
    <Fragment>
        <span style={{flex: '-1', padding: '5px 10px', fontSize: '20px'}}>User name</span>
        <input style={{flex: '1', backgroundColor: 'black', color: 'white', padding: '5px 10px', fontSize: '20px'}} type="text" value={user} onChange={onUserChange} />
    </Fragment>
);

UserInput.propTypes = {
    user: PropTypes.string,
    onUserChange: PropTypes.func,
}

export default UserInput;