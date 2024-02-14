import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { WheelBool, ExpWheelBool, CurrentAIName, AIMakerExplainModalBool } from '../store/atom';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import HeadImage from '../assets/KakaoTalk_20240207_205532036.jpg'

function ContactList () {
    
    return(
        <Container>
          <h2>Contact</h2>
          <Line/>
        </Container>
    )
}

export default ContactList;


const Line = styled.div`
  width: 25vw;
  height: 5px;
  background-color: rgba(30, 30, 30, 0.9);
  margin-bottom: 15px;
`

const Container = styled(motion.div)`
display: flex;
align-items: center;
background-color: aliceblue;
flex-direction: column;
justify-content: flex-start;
padding-top: 25px;
width: 1200px;
height: 100%;
max-height: 100%;
gap: 25px;
margin-bottom: 150px;

  h2 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: rgba(30, 30, 30, 0.9); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: black; font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: gray; font-size: 27px; font-family: inherit;}

`