import * as MovingSymbolsConstants from '../moving.symbols.constants';
import { checkConstantsConsistency } from '../../../../__testing__/constants.checker';

describe('Settings movins symbol constants', () => {
    checkConstantsConsistency(MovingSymbolsConstants);
});
