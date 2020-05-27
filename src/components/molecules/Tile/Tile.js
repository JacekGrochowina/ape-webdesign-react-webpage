import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph/index';
import Icon from 'components/atoms/Icon';

const Wrapper = styled.div`
    text-align: center;
    padding: 35px;
    border: 1px solid ${({ theme }) => theme.color.light};
    margin-bottom: 30px;
    transition-property: box-shadow;
    transition-duration: 0.25s;
    :hover {
        box-shadow: 0 1px 13px rgba(0,0,0,0.2);
    }
`;

const StyledIcon = styled(Icon)`
    margin: auto;
    margin-bottom: 30px;
`;

const Tile = ({ icon, title, description }) => {
    return (
        <Wrapper>
            <StyledIcon size={60} image={icon}/>
            <Heading secondary>{title}</Heading>
            <Paragraph>{description}</Paragraph>
        </Wrapper>
    );
};

export default Tile;
