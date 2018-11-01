import * as matchers from 'jest-immutable-matchers';
import { Map } from 'immutable';
import { setRootFactory, toJS } from '../store.utils';

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

    it('uses toJS to converts a immuable to plain js', () => {
        const obj = {
            a: 1,
            b: 2,
        };
        expect(toJS(Map(obj))).toEqual(obj);
    });

    it('uses toJS to return an obj unchanged if obj is plain js', () => {
        const obj = {
            a: 1,
            b: 2,
        };
        expect(toJS(obj)).toEqual(obj);
    });
});
