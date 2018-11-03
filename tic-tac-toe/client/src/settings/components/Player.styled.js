import styled from 'styled-components';

export const PlayerType = styled.span`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ color }) => color};
`;

export const PlayerContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: center;
    width: ${({ thumbSize }) => thumbSize};
    height: ${({ thumbSize }) => thumbSize};
`;
