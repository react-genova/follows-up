import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: transparent;
    border-radius: 5px;
    border: 2px solid #999;
    color: #999;
    font-size: 2em;
    padding: 0.5em;
    cursor: pointer;
    width: 8em;
    outline: none;
    &:hover {
        background-color: #999;
        color: #333;
    }
`;

export default StyledButton;
