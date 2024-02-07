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

function Main() {

    return (<Container>
        <MainTitle></MainTitle>
        <AnimatePresence>
        <SkillList key = 'Skill'></SkillList>
        </AnimatePresence>
        <AnimatePresence>
            <ProjectContainer>
                    <ButtonBox />
                    <ProjectDisplay key = 'ProjectDisList'/>
            </ProjectContainer>
        </AnimatePresence>
    </Container>)
}

export default Main;


const ProjectContainer = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
background-color: rgba(111, 195, 226, 0);
width: 1200px;
height: 800px;
margin-right: 10vw;
`

const Container = styled.div`
padding-top: 90px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgba(240, 240, 240, 1);;
    width: 100vw;
    height: 2000px;
`

