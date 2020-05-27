import styled from 'styled-components';

const Icon = styled.div`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    background-image: ${({ image }) => `url(${image})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export default Icon;