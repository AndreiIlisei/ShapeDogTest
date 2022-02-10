import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<Props>`
    *, *:after, *:before{
        box-sizing: border-box;
        margin: 0;
        outline: none;
    }

    body {
        background: ${({ theme }) => theme.grey}
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.secondary}
    }
    ul {
        list-style: none;
    }
`;

export default GlobalStyle;



