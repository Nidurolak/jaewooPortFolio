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
        <AnimatePresence>
            <Container>
                <h2>Project</h2>
                <Line />
                <ProjectContainer>
                    <ButtonBox />
                    <ProjectDisplay key='ProjectDisList' />
                </ProjectContainer>
            </Container>
        </AnimatePresence>)
}

export default ProjectList


const Line = styled.div`
  width: 25vw;
  height: 5px;
  background-color: rgba(30, 30, 30, 0.9);
  margin-bottom: 15px;
`
const ProjectContainer = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
background-color: rgba(111, 195, 226, 0);
max-width: 1200px;
max-height: 400px;
height: 100%;
margin-right: 10vw;
  @media (max-width: 1000px) { 
    max-width: 1000px;
    max-height: fit-content;
    flex-direction: column;
  }
`
const Container = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
width: 70vw;
max-width: 1000px;
height: 100%;
min-height: 700px;
gap: 25px;
margin-bottom: 50px;

  h2 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(30, 30, 30, 0.9); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(30, 30, 30, 0.9); font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: gray; font-size: 27px; font-family: inherit;}

`