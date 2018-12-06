import * as GameStatusConstants from '../game.status.constants';
import { checkConstantsConsistency } from '../../../../../__testing__/constants.checker';

describe('Game status constants', () => {
    checkConstantsConsistency(GameStatusConstants);
});
