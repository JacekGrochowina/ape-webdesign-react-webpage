import styled from 'styled-components';

const Tone = styled.span`
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 1.35em;
    line-height: 0.7;
    color: ${({ theme }) => theme.color.leading};
`;

export default Tone;