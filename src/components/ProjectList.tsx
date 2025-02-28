import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import HeadImage from '../assets/KakaoTalk_20240207_205532036.jpg'
import ButtonBox from './ButtonBox';

function ProjectList(value: any) {
  return (
    <AnimatePresence mode='wait'>
      <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <motion.h2>Project</motion.h2>
        <Line />
        <ProjectContainer>
          <ButtonBox />
          <ProjectDisplay key='ProjectDisList' />
        </ProjectContainer>
      </Container>
    </AnimatePresence>)
}//ASDASD 

export default ProjectList


const Line = styled.div`
  width: 25vw;
  height: 5px;
  background-color: rgba(235, 235, 235, 1);
  margin-bottom: 15px;
@media (max-height: 900px) {
  margin-bottom: 5px;
}
`
const ProjectContainer = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
background-color: rgba(111, 195, 226, 0);
height: 100%;
  @media (max-width: 1000px) { 
    max-height: fit-content;
    flex-direction: column;
  }
`
const Container = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 100%;
  h2 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(235, 235, 235, 1); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(235, 235, 235, 1); font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: gray; font-size: 27px; font-family: inherit;}

@media (max-height: 900px) {
gap: 10px;
overflow-y: auto;
h2 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(235, 235, 235, 1); font-size: 35px; font-family: inherit;}

}

`