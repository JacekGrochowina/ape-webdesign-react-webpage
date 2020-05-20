import styled from 'styled-components';

const Paragraph = styled.p`
    font-family: ${({ theme }) => theme.fontFamily.leading};
    line-height: 1.6;
    color: ${({ theme }) => theme.color.gray};
`;

export default Paragraph;