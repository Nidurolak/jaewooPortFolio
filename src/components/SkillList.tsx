import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { WheelBool, ExpWheelBool, CurrentAIName, AIMakerExplainModalBool } from '../store/atom';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import HeadImage from '../assets/KakaoTalk_20240207_205532036.jpg'
import 씨샾 from '../assets/씨샾.png';
import TS from '../assets/TS.png';
import fm from '../assets/fm.png';
import js from '../assets/js.jpg';
import RC from '../assets/RC.png';
import react from '../assets/react.png';
import RQ from '../assets/RQ.png';
import sc from '../assets/sc.jpg';


function SkillList () {
    return(<Container> 
        <h2>Skills</h2>
        <Line/>
        <SkillContainer>
        <SkillIcon image={씨샾}></SkillIcon>
        <SkillIcon image={react}></SkillIcon>
        <SkillIcon image={TS}></SkillIcon>
        <SkillIcon image={fm}></SkillIcon>
        <SkillIcon image={js}></SkillIcon>
        <SkillIcon image={RC}></SkillIcon>
        <SkillIcon image={RQ}></SkillIcon>
        <SkillIcon image={sc}></SkillIcon>
        </SkillContainer>

    </Container>)
}

export default SkillList;

const Line = styled.div`
  width: 25vw;
  height: 5px;
  background-color: rgba(30, 30, 30, 0.9);
  margin-bottom: 15px;
`
const SkillIcon = styled(motion.div)<{ image: any }>`
background-color: rgba(255, 255, 255, 1);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: rgba(255, 255, 255, 0);
  background-image: ${({ image }) => `url(${image})`};
  width: 130px;
  height: 130px;
  border: 2px solid black;
  border-radius: 9px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`

const SkillContainer = styled(motion.div)`
display: grid;
grid-gap: 20px;
align-items: center;
  grid-template-columns: repeat(6, 2fr);
justify-content: center;
align-items: center;
width: 100%;
max-width: 50vw;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr); /* 화면이 1200px 이하일 때: 한 줄에 4개 */
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr); /* 화면이 800px 이하일 때: 한 줄에 2개 */
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr); /* 화면이 800px 이하일 때: 한 줄에 2개 */
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr; /* 화면이 400px 이하일 때: 한 줄에 1개 */
  }
`

const Container = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
padding-top: 25px;
width: 1200px;
max-height: fit-content;
gap: 25px;
margin-bottom: 150px;

  h2 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: rgba(30, 30, 30, 0.9); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: black; font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: gray; font-size: 27px; font-family: inherit;}

`