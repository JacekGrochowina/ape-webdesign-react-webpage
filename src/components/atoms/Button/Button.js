import styled, { css } from 'styled-components';

const Button = styled.button`

    /* example */
    ${({ secondary }) =>
        secondary &&
        css`
        
    `}
`;

export default Button;
