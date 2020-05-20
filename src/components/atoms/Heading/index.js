import React from 'react';
import Header from './Heading';
import Tone from './Tone';

const Heading = ({ children, tone, secondary, card }) => {
    return (
        <Header 
            secondary={secondary == true ? secondary : null}
            card={card == true ? card : null}
        >
            {children}
            {secondary == true || card == true ? null : <Tone>{tone == null ? "." : tone}</Tone>}
        </Header>
    )
}

export default Heading;