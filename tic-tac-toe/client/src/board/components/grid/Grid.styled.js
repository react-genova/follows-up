import styled from 'styled-components';

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

const Cell = styled.div`
    color: #fff;
    background-color: #444;
    border-radius: 8%;
    padding: 15%;
`;

export { GridContainer, Cell };
