import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /*
     * import fonts
     *  Lato:     regular 400
     *            bold 700
     *  PT Sans:  regular 400
     *            bold 700
     */
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=PT+Sans:wght@400;700&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; 
    }

    body {
        font-size: 1.6rem;
        font-family: 'Lato', sans-serif;
    }
`;

export default GlobalStyle;
