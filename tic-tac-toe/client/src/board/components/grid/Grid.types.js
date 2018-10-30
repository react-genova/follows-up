import PropTypes from 'prop-types';
import { SIGN_NONE, SIGN_O, SIGN_X } from '../../modules/types/signs.constants';

export const valuePropTypes = PropTypes.oneOf([SIGN_NONE, SIGN_O, SIGN_X]);

export const valuesPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        value: valuePropTypes.isRequired,
        valid: PropTypes.bool.isRequired,
    }),
);

export const playingTypePropTypes = PropTypes.oneOf([SIGN_O, SIGN_X]);
