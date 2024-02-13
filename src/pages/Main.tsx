import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { WheelBool, ExpWheelBool, CurrentAIName, AIMakerExplainModalBool } from '../store/atom';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import MainTitle from '../components/MainTitle';
import ButtonBox from '../components/ButtonBox';
import SkillList from '../components/SkillList';
import AboutMeList from '../components/AboutMeList';
import ProjectList from '../components/ProjectList';

function Main() {

    return (
    <Container>
        <MainTitle/>
        <AnimatePresence>
            <AboutMeList/>
            <SkillList key = 'Skill'/>
            </AnimatePresence>
            <ProjectList/>
    </Container>)
}

export default Main;



const Container = styled.div`
padding-top: 90px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgba(240, 240, 240, 1);;
    width: 100vw;
    height: fit-content;
    padding-bottom: 150px;
`

