import getBoardResultsFromValues from '../board.utils';
import { SIGN_NONE as _, SIGN_O as O, SIGN_X as X } from '../types/signs.constants';

describe('Engine utils. Game result', () => {
    const val = value => ({ value, valid: _ !== value });

    it('is not draw, we have a winner on a full board', () => {
        const VALUES = [
            O, X, O,
            O, X, X,
            O, O, X,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: true,
            won: true,
            draw: false,
            winner: O,
            winningSequence: [0, 3, 6],
        });
    });

    it('is draw, no more moves available', () => {
        const VALUES = [
            O, X, X,
            X, X, O,
            O, O, X,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: true,
            won: false,
            draw: true,
            winner: _,
            winningSequence: [],
        });
    });

    it('has no winning sequence (no signs on board)', () => {
        const VALUES = [
            _, _, _,
            _, _, _,
            _, _, _,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: false,
            won: false,
            draw: false,
            winner: _,
            winningSequence: [],
        });
    });

    it('has no winning sequence (some signs on board)', () => {
        const VALUES = [
            _, _, O,
            _, X, O,
            _, _, _,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: false,
            won: false,
            draw: false,
            winner: _,
            winningSequence: [],
        });
    });

    it('has no winning sequence (one sign on board)', () => {
        const VALUES = [
            _, _, _,
            _, _, O,
            _, _, _,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: false,
            won: false,
            draw: false,
            winner: _,
            winningSequence: [],
        });
    });

    it('has a winning sequence 1', () => {
        const VALUES = [
            O, _, _,
            O, X, _,
            O, _, X,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: true,
            won: true,
            draw: false,
            winner: O,
            winningSequence: [0, 3, 6],
        });
    });

    it('has a winning sequence 2', () => {
        const VALUES = [
            X, O, _,
            X, O, _,
            _, O, X,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: true,
            won: true,
            draw: false,
            winner: O,
            winningSequence: [1, 4, 7],
        });
    });

    it('has no winning sequence (no signs on board)', () => {
        const VALUES = [
            X, _, X,
            O, O, X,
            O, O, X,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: true,
            won: true,
            draw: false,
            winner: X,
            winningSequence: [2, 5, 8],
        });
    });


    it('has no winning sequence (no signs on board)', () => {
        const VALUES = [
            X, X, X,
            _, O, _,
            _, _, O,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: true,
            won: true,
            draw: false,
            winner: X,
            winningSequence: [0, 1, 2],
        });
    });

    it('has no winning sequence (no signs on board)', () => {
        const VALUES = [
            _, _, _,
            O, O, O,
            _, _, _,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: true,
            won: true,
            draw: false,
            winner: O,
            winningSequence: [3, 4, 5],
        });
    });

    it('has no winning sequence (no signs on board)', () => {
        const VALUES = [
            _, _, _,
            _, _, _,
            X, X, X,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: true,
            won: true,
            draw: false,
            winner: X,
            winningSequence: [6, 7, 8],
        });
    });

    it('has no winning sequence (no signs on board)', () => {
        const VALUES = [
            O, _, _,
            _, O, _,
            _, _, O,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: true,
            won: true,
            draw: false,
            winner: O,
            winningSequence: [0, 4, 8],
        });
    });

    it('has no winning sequence (no signs on board)', () => {
        const VALUES = [
            _, _, X,
            _, X, _,
            X, _, _,
        ].map(val);
        expect(getBoardResultsFromValues(VALUES)).toEqual({
            ended: true,
            won: true,
            draw: false,
            winner: X,
            winningSequence: [2, 4, 6],
        });
    });
});
