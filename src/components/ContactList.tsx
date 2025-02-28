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

function ContactList(value: any) {

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
      <h2>More Info</h2>
      <Line />
      <ContactBox>
        <ArchiveContainer>
          <h2>Archive</h2>
          <ArchiveBox>
            <Icon image={git} />
            <a href="https://github.com/Nidurolak">https://github.com/Nidurolak</a>
          </ArchiveBox>
          <ArchiveBox>
            <Icon image={티스토리} />
            <a href="https://karoludin.tistory.com">https://karoludin.tistory.com</a>
          </ArchiveBox>
        </ArchiveContainer>

        <ArchiveContainer>
          <h2>Contact</h2>
          <ArchiveBox>
            <Icon image={이메일} />
            <h4>jaewoon08@gmail.com</h4>
          </ArchiveBox>
          <ArchiveBox>
            <Icon image={전화} />
            <h4>010-4160-9655</h4>
          </ArchiveBox>
        </ArchiveContainer>

      </ContactBox>
    </Container>
  )
}

export default ContactList;

const Icon = styled.div<{ image: any }>`
background-color: rgba(255, 255, 255, 0.8);
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
border: 3px solid rgba(235, 235, 235, 0.9);
border-radius: 15px;
height: 300px;
max-height: 300px;
&:hover {
    cursor: default;
}
@media (max-width: 1400px) {
gap: 10px;
}
@media (max-height: 900px) {
gap: 10px;
height: 250px;
max-height: 250px;
}

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
@media (max-width: 1400px) {
flex-direction: column;
gap: 20px;
}
@media (max-height: 900px) {
max-height: 500px;
}
@media (max-height: 700px) {
max-height: 400px;
}
`

const Line = styled.div`
  width: 25vw;
  height: 5px;
  background-color: rgba(235, 235, 235, 0.9);
  margin-bottom: 15px;
@media (max-height: 900px) {
  margin-bottom: 0px;
}
`

const Container = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
padding-top: 25px;
width: 100%;
max-width: 1000px;
height: 100%;
max-height: 100%;
gap: 25px;
margin-bottom: 150px;

  h2 {text-align: center; word-spacing: 1px; word-break:keep-all; font-weight: 450; color: rgba(235, 235, 235, 1); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: rgba(235, 235, 235, 1); font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: rgba(235, 235, 235, 1); font-size: 27px; font-family: inherit;}
  @media (max-width: 1400px) {
    h2 {text-align: center; word-spacing: 1px; word-break:keep-all; font-weight: 450; color: rgba(235, 235, 235, 1); font-size: 35px; font-family: inherit;}
    justify-content:center;
    gap: 10px;
  }
@media (max-height: 900px) {
gap: 10px;
}
  a {
    color: rgba(235, 235, 235, 0.6);
    font-weight: 500;
    font-size: 27px;

    &:link {
      color: rgba(235, 235, 235, 1);
    }

    &:hover {
      color: rgba(255, 197, 0, 1);
    }
  }
&:hover {
    cursor: default;
}

`