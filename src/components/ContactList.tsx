import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import HeadImage from '../assets/KakaoTalk_20240207_205532036.jpg'
import 이메일 from '../assets/이메일.png'
import 전화 from '../assets/전화.png'
import git from '../assets/git.png'
import 티스토리 from '../assets/티스토리.png'

function ContactList (value: any) {
    
    return(
        <Container>
          <h2>More Info</h2>
          <Line/>
          <ContactBox>
            <ArchiveContainer>
              <h2>Archive</h2>
              <ArchiveBox>
                <Icon image={git}/>
                <a href="https://github.com/Nidurolak">https://github.com/Nidurolak</a>
              </ArchiveBox>
              <ArchiveBox>
                <Icon image={티스토리}/>
                <a href="https://karoludin.tistory.com">https://karoludin.tistory.com</a>
              </ArchiveBox>
            </ArchiveContainer>

            <ArchiveContainer>
              <h2>Contact</h2>
              <ArchiveBox>
                <Icon image={이메일}/>
                <h4>jaewoon08@gmail.com</h4>
              </ArchiveBox>
              <ArchiveBox>
                <Icon image={전화}/>
                <h4>010-4160-9655</h4>
              </ArchiveBox>
            </ArchiveContainer>

          </ContactBox>
        </Container>
    )
}

export default ContactList;

const Icon = styled.div<{ image: any }>`
background-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: rgba(255, 255, 255, 0);
  background-image: ${({ image }) => `url(${image})`};
  width: 50px;
  height: 50px;
  border-radius: 9px;
  transition: transform 0.3s;
`
const ArchiveBox = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: flex-start;
gap: 15px;
align-self: flex-start;
padding-left: 40px;
`

const ArchiveContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
gap: 25px;
width: 500px;
max-width: 500px;
border: 3px solid rgba(30, 30, 30, 0.9);
border-radius: 15px;
height: 300px;
max-height: 300px;
`

const ContactBox = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
gap: 50px;
width: 100%;
height: 100%;
max-height: 600px;
margin-bottom: 50px;
@media (max-width: 1200px) {
flex-direction: column;
}
`

const Line = styled.div`
  width: 25vw;
  height: 5px;
  background-color: rgba(30, 30, 30, 0.9);
  margin-bottom: 15px;
`

const Container = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
padding-top: 25px;
width: 1200px;
height: 100%;
max-height: 100%;
gap: 25px;
margin-bottom: 150px;

  h2 {text-align: center; word-spacing: 1px; word-break:keep-all; font-weight: 450; color: rgba(30, 30, 30, 0.9); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: black; font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: rgba(30, 30, 30, 0.9); font-size: 27px; font-family: inherit;}
  a {color:rgba(30, 30, 30, 0.7);text-decoration: none;font-weight: 500;font-size: 27px;&:hover{color: rgba(30, 30, 30, 1);}}
`