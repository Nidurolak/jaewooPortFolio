import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { WheelBool, ExpWheelBool, CurrentAIName, AIMakerExplainModalBool } from '../store/atom';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import HeadImage from '../assets/KakaoTalk_20240207_205532036.jpg'


function ButtonBox (){
    return(
        <ProjectButtonBox>
            <ProjectButton name="Navis"></ProjectButton>
            <ProjectButton name="재우's AI다운로더"></ProjectButton>
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
gap: 20px;
padding-right: 10px;
`
