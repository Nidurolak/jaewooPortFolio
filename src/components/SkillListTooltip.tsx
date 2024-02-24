import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';


function SkillListTooltip(){

    return(<Container
        initial={{ width: 0 , x: 0}}
        animate={{ width: 500 , x: 250}}
        transition={{ duration: 1 }}>
        <h3>asdasdaasdasadasasasd</h3>
    </Container>)
}

const Container = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
max-width: 500px;
background-color: rgba(0, 0, 0, 0.9);
color: white;
width: 250px; /* 상위 컨테이너의 50%로 설정 (내용물에 비례) */

h2 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(255, 255, 255, 0.9); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: rgba(255, 255, 255, 0.9); font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: gray; font-size: 27px; font-family: inherit;}

`

export default SkillListTooltip