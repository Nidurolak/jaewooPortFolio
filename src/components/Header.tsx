import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { WheelBool, ExpWheelBool, CurrentAIName, AIMakerExplainModalBool } from '../store/atom';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import MainTitle from '../components/MainTitle';


function Header () {
    return(<HeaderCotainer>
        <h3>한 번 해보는 개발자, 김재우</h3>
    </HeaderCotainer>)
}

export default Header;

const NameBox = styled.div`
    display: flex;
    justify-content: center;
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
align-items: center;
h3{
  cursor : pointer;
  margin: 0px;
  padding: 0px 0px 0px 10px;
  font-size: 35px;
  color: white;
}
h4{
cursor: pointer;
  margin: 0px;
  padding: 0px 40px 0px 0px;
  font-size: 25px;
  color: white;
}
h5{
cursor: pointer;
  margin: 0px;
  padding: 0px 40px 0px 0px;
  font-size: 21px;
  color: white;
}
`