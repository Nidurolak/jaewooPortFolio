import { createGlobalStyle } from 'styled-components';
import NotoSansKR from '../../fonts/NotoSansKR.ttf'; // 경로를 적절하게 수정
import '../../fonts/font.css'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 10px;
        list-style: none; 
        text-decoration: none;
        font-family: 'Noto';
    font-weight: 500;
    }
    body {
        overflow-x: hidden;
    }
    h2 {color: white; font-weight: 250; font-size: 55px; }
    h3 {color: white; font-weight: 250; font-size: 23px; }
`;