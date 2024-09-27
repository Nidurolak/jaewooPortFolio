import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import HeadImage from '../assets/KakaoTalk_20240207_205532036.jpg'

function MainTitle() {

  return (<MainTitleBack>
    <MainTitleContainer>
      <TextBoxContainer>
        <h2>한 번 해보는 개발자, 김재우입니다!</h2>
        <h4>-Frontend Developer-</h4>

      </TextBoxContainer>
    </MainTitleContainer>
  </MainTitleBack>)
}

export default MainTitle;

const TextBoxContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
width: 100%;
max-width: 800px;
height: 100%;
padding-top: 150px;
padding-left: 90px;
  @media (max-width: 500px) {
max-width: 500px; /* 화면이 1200px 이하일 때: 한 줄에 4개 */
  }
  @media (max-width: 400px) {
max-width: 400px; /* 화면이 800px 이하일 때: 한 줄에 2개 */
  }
`

const MainTitleContainer = styled.div`
background-color: rgba(255, 255, 255, 0.6);
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
  width: 100%;
  height: 100%;

  h2 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(30, 30, 30, 0.9); font-size: 45px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: black; font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: gray; font-size: 27px; font-family: inherit;}

`

const MainTitleBack = styled.div`
background-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: rgba(255, 255, 255, 1);
    background-image: url(${HeadImage});
  width: 100vw;
  height: 250px;
`