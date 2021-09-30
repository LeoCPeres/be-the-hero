import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E02041;
        --text-title: #13131A;
        --text-title-secondary: #41414D;
        --text: #737380;
        --text-secondary: #A8A8B3;
        --white: #ffffff;
        --gray: #DCDCE5;
        --background: #F0F0F5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }

        @media(max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

    h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
