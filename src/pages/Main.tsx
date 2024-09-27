import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import MainTitle from '../components/MainTitle';
import ButtonBox from '../components/ButtonBox';
import SkillList from '../components/SkillList';
import AboutMeList from '../components/AboutMeList';
import ProjectList from '../components/ProjectList';
import ContactList from '../components/ContactList';
import { Element, scroller } from 'react-scroll';
import SkillListTooltip from '../components/SkillListTooltip';

function Main() {

    return (
        <Container>
            <MainTitle />
            <AnimatePresence>
                <Element name="AboutMe"><AboutMeList /></Element>
                <Element name="Skill"><SkillList key='Skill' /></Element>

            </AnimatePresence>
            <Element name="Project"><ProjectList /></Element>
            <Element name="Contact"><ContactList /></Element>


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
    @media(max-width: 800px){
        padding-bottom: 50px;
    }
`

