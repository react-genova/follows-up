import * as GameResultsConstants from '../game.results.constants';
import { checkConstantsConsistency } from '../../../../../__testing__/constants.checker';

describe('Game results constants', () => {
    checkConstantsConsistency(GameResultsConstants);
});
