import React from 'react';
import Header from './Header';
import Tone from './Tone';

const Heading = ({ children, tone, secondary }) => {
    return (
        <Header secondary={secondary == true ? secondary : null}>
            {children}
            {secondary == true ? null : <Tone>{tone == null ? "." : tone}</Tone>}
        </Header>
    )
}

export default Heading;