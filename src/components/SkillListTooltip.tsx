import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, delay, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { TooltipProps } from '../utils/types';


function SkillListTooltip({ top, left }: TooltipProps) {

  return (<Container
    initial={{ width: 0, x: 0 }}
    animate={{ width: 250, x: 0 }}
    transition={{ duration: 0.5 }}
    style={{ top: top, left: left }}>
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
      style={{ wordBreak: 'break-all' }}
    >asdasdaasdasadasasasd</motion.h3>
  </Container>)
}

const Container = styled(motion.div)`
z-index: 1000;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.9);
color: white;
width: 250px; /* 상위 컨테이너의 50%로 설정 (내용물에 비례) */
  height: 130px;

h2 {word-spacing: 1px; padding-left: 10px; font-weight: 450; color: rgba(255, 255, 255, 0.9); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; padding-left: 10px; font-weight: 450; color: rgba(255, 255, 255, 0.9); font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: gray; font-size: 27px; font-family: inherit;}

`

export default SkillListTooltip