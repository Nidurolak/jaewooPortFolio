import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import MainTitle from '../components/MainTitle';
import { Link, scroller } from 'react-scroll';


interface LeftDivProps {
  scrollToComponent: (componentId: string) => void;
}
function Header({ scrollToComponent }: LeftDivProps) {
  return (<HeaderCotainer>
    <h3>한 번 해보는 개발자, 김재우</h3>
    <ScrollBox>
      <h5 onClick={() => scrollToComponent("AboutMe")}>About Me</h5>
      <h5 onClick={() => scrollToComponent("Skill")}>Skill</h5>
      <h5 onClick={() => scrollToComponent("Project")}>Project</h5>
      <h5 onClick={() => scrollToComponent("Contact")}>MoreInfo</h5>
    </ScrollBox>
  </HeaderCotainer>)
}

export default Header;

const ScrollBox = styled.div`
width: 100%;
max-width: 400px;
    display: flex;
    align-items: center;
    gap: 15px;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 80px;
    @media (max-width: 1100px) {
      max-width: 400px;
      justify-content: flex-start;
      gap: 0px;
      padding-right: 0px;
    }
`

const HeaderCotainer = styled(motion.div)`
position: fixed;
left: 0%;
top: 0%;
background-color: rgba(150, 150, 150, 1);
width: 100vw;
height: 90px;
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
white-space: nowrap;
@media (max-width: 1100px) {
  flex-direction: column;
  height: 120px;
  padding-top: 15px;
  padding-bottom: 15px;
}
h3{cursor : pointer; margin: 0px; padding: 0px 0px 0px 10px; font-size: 35px; color: white;}
h4{cursor: pointer; margin: 0px; padding: 0px 40px 0px 0px; font-size: 25px; color: white;}
h5{cursor: pointer; margin: 0px; padding: 0px 40px 0px 0px; font-size: 21px; color: white;}
`