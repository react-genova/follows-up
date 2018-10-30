import * as matchers from 'jest-immutable-matchers';
import { Map } from 'immutable';
import setRootFactory from '../store.utils';

beforeEach(() => jest.addMatchers(matchers));

describe('store.utils component', () => {
    it('creates a setRoot factory to retrie a module using its name', () => {
        const MYMODULE = Map();
        const STATE = Map({
            anothermodule: Map(),
            mymodule: MYMODULE,
        });
        expect(setRootFactory('mymodule')(STATE)).toBe(MYMODULE);

    });
});
