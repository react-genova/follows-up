import * as SignsConstants from '../signs.constants';
import { checkConstantsConsistency } from '../../../../__testing__/constants.checker';

describe('Board signs constants', () => {
    checkConstantsConsistency(SignsConstants);
});
