import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';


function SkillListTooltip(){

    return(<Container>
        
    </Container>)
}

const Container = styled(motion.div)`
    position: fixed;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
background-color: rgba(0, 0, 0, 0.9);
color: white;
width: 250px; /* 상위 컨테이너의 50%로 설정 (내용물에 비례) */

`

export default SkillListTooltip