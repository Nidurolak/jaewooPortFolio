import { createGlobalStyle } from 'styled-components';
import NotoSansKR from '../../fonts/NotoSansKR.ttf'; // 경로를 적절하게 수정

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 10px;
        list-style: none; 
        text-decoration: none;
        font-family: 'Mabinogi_Classic_TTF';
    font-weight: 500;
    }
    @font-face{
        font-family: 'Mabinogi_Classic_TTF';
        src: local('Mabinogi_Classic_TTF'), local('Mabinogi_Classic_TTF');
        font-style: normal;
        src: url(${NotoSansKR}) format('truetype');
    }
    body {
        overflow-x: hidden;
    }

`;