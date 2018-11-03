import styled from 'styled-components';
import { MOVING_SYMBOL_O, MOVING_SYMBOL_X } from '../../../settings/modules/types/moving.symbols.constants';

const GridContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #333;
    display: grid;
    grid-gap: 2%;
    grid-template-columns: repeat(6, 32%);
    grid-template-rows: 32% 32% 32%;
    grid-auto-flow: column;
`;

const getBorderColor = type => ({
    [MOVING_SYMBOL_O]: 'rgba(255, 255, 0, 0.15)',
    [MOVING_SYMBOL_X]: 'rgba(0, 255, 255, 0.15)',
})[type];

const Cell = styled.div`
    color: #fff;
    background-color: #444;
    border-radius: 8%;
    padding: 15%;
    background-color: ${({ highlight, type }) => {
        if (highlight) {
            return `${getBorderColor(type)}`;
        }
        return '#444';
    }};
`;

export { GridContainer, Cell };
