import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import HeadImage from '../assets/KakaoTalk_20240207_205532036.jpg'


function ButtonBox() {
  return (
    <ProjectButtonBox>
      <ProjectButton name="Navis"></ProjectButton>
      <ProjectButton name="재우's AI 다운로더"></ProjectButton>
      <ProjectButton name="재우's AI 메이커"></ProjectButton>
      <ProjectButton name="AJGAG"></ProjectButton>
      <ProjectButton name="골디락스존"></ProjectButton>
    </ProjectButtonBox>)
}

export default ButtonBox;

const ProjectButtonBox = styled(motion.div)`
display: flex;
align-items: flex-end;
flex-direction: column;
justify-content: flex-end;
background-color: rgba(0,0,0,0);
width: 210px;
height: 550px;
gap: 7px;
padding-right: 10px;
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: flex-start;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 800px) {
    display: grid;
    justify-content: center;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 100%;
  }
  @media (max-width: 700px) {
    display: grid;
    justify-content: center;
    align-items: flex-start;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
  }
  @media (max-height: 900px) {
height: 100%;
padding-right: none;
  }
  @media (max-height: 700px) {
height: 100%;
padding-right: none;
  }
`
