import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 5em;
    width: 500px;
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;

export const Name = styled.span`
    flex: 1;
    font-size: 1.5em;
`;

export const Score = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    padding-right: 0.4em;
`;

export const Title = styled.span`
    font-size: 2em;
    font-weight: bold;
    padding-bottom: 0.3em;
`;

export const Table = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Results = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #909090;
    border-top: 1px solid #909090;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    color: #909090;
    max-width: 500px;
`;
