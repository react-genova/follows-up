import React from 'react';
import PropTypes from 'prop-types';
import Sign from '../../board/components/signs/Sign';

const GamesHistorySign = ({ type, width }) => (
    <div style={{ width, height: '1em' }}>
        <Sign hasValue type={type} />
    </div>
);

GamesHistorySign.propTypes = {
    type: PropTypes.string.isRequired,
    width: PropTypes.string,
};

GamesHistorySign.defaultProps = {
    width: '2.5em',
};

export default GamesHistorySign;
