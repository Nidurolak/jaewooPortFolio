import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, delay, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { TooltipProps } from '../utils/types';


function SkillListTooltip({ top, left, skills, experts }: TooltipProps) {


  return (<Container
    initial={{ width: 0, x: 0 }}
    animate={{ width: 350, x: 0 }}
    transition={{ duration: 0.5 }}
    style={{ top: top, left: left, borderRadius: 7 }}>
    <MotionH3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      style={{ color: "rgba(0, 0, 0, 0.9)" }}
    >{skills}</MotionH3>
    <MotionH4
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //h태그는 프레이머 모션 CSS가 우선인가?
      transition={{ duration: 1, delay: 0.5 }}
      style={{ color: "rgba(0, 0, 0, 0.9)" }}
    >{experts}</MotionH4>
  </Container>)
}

const MotionH4 = styled(motion.h4)`
  word-spacing: 1px;
  word-break: keep-all;
  padding-left: 10px;
  white-space: pre-wrap;
  font-weight: 450;
  color: rgba(255, 255, 255, 0.9); /* 흰색으로 지정 */
  font-size: 17px;
  font-family: inherit; 
`;
const MotionH3 = styled(motion.h3)`
  word-spacing: 1px; 
  word-break: keep-all;
  padding-left: 10px;
  font-weight: 450;
  color: rgba(255, 255, 255, 0.9); /* 흰색으로 지정 */
  font-size: inherit;
  font-family: inherit;
`;


const Container = styled(motion.div)`
z-index: 1000;
position: absolute;
flex-direction: column;
display: flex;
justify-content: flex-start;
padding: 5px;
align-items: center;
background-color: rgba(235, 235, 235, 0.9);
color: white;
width: 250px; /* 상위 컨테이너의 50%로 설정 (내용물에 비례) */
  height: 140px;

h2 {word-spacing: 1px; word-break:keep-all;  padding-left: 10px; font-weight: 450; color: rgba(255, 255, 255, 0.9); font-size: 17px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all;  padding-left: 10px; font-weight: 450; color: rgba(255, 255, 255, 0.9); font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(255, 255, 255, 0.9); font-size: 17px; font-family: inherit;}
 
`

export default SkillListTooltip