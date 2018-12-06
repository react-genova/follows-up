import * as PlayerTypesConstants from '../player.types.constants';
import { checkConstantsConsistency } from '../../../../__testing__/constants.checker';

describe('Settings player types constants', () => {
    checkConstantsConsistency(PlayerTypesConstants);
});
