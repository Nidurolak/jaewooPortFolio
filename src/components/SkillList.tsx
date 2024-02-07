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
        <SkillContainer>
        <SkillIcon image={씨샾}></SkillIcon>
        <SkillIcon image={TS}></SkillIcon>
        <SkillIcon image={fm}></SkillIcon>
        <SkillIcon image={js}></SkillIcon>
        <SkillIcon image={RC}></SkillIcon>
        <SkillIcon image={RQ}></SkillIcon>
        <SkillIcon image={sc}></SkillIcon>
        <SkillIcon image={react}></SkillIcon>
        </SkillContainer>

    </Container>)
}

export default SkillList;

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
`

const Container = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
padding-top: 25px;
width: 1200px;
height: 400px;

  h2 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(30, 30, 30, 0.9); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: black; font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: gray; font-size: 27px; font-family: inherit;}

`