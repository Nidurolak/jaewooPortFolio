import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import HeadImage from '../assets/KakaoTalk_20240207_205532036.jpg'
import SkillListTooltip from './SkillListTooltip';

function AboutMeList(value: any) {


  return (
    <Container>
      <h2>About Me</h2>
      <Line />
      <h3>Frontend에 관심을 두고 있는 주니어 개발자입니다. 항상 경험거리를 찾아 활동해왔으며 문학, 게임 개발, 코딩 등의 분야를 시도해보며 지식을 익히고 다져왔습니다!<br /> 다양한 분야에서 여러 상황을 경험해온 저는 문제를 마주하면 먼저 해보고, 조사하고, 공유하며 해결하는 것을 모토로 삼고 있습니다!</h3>

    </Container>)
}

export default AboutMeList



const Line = styled.div`
  width: 25vw;
  height: 5px;
  background-color: rgba(235, 235, 235, 1);
  margin-bottom: 15px;
`
const Container = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
width: 100%;
max-width: 1000px;
gap: 25px;
cursor: default;

  h2 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(235, 235, 235, 1); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(235, 235, 235, 1); font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: gray; font-size: 27px; font-family: inherit;}

`