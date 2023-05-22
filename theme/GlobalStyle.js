import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Poppins', sans-serif;
    }    

    h1{
        font-weight: 400;
        font-size: 40px;
        line-height: 60px;        
    }
    h2{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: ${(props) => (props.fontSize ? props.fontSize: "20px")};
        line-height: ${(props) => (props.lineHeight ? props.lineHeight: "27px")};
    }
    h3{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
    }
    h4{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
    }
    `
