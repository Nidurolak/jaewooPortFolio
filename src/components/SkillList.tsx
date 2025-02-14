import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import HeadImage from '../assets/KakaoTalk_20240207_205532036.jpg'
import 씨샾 from '../assets/씨샾.png';
import TS from '../assets/TS.png';
import fm from '../assets/fm.png';
import js from '../assets/js.jpg';
import RC from '../assets/RC.png';
import react from '../assets/react.png';
import RQ from '../assets/RQ.png';
import sc from '../assets/sc.jpg';
import SkillListTooltip from './SkillListTooltip';


function SkillList(value: any) {

  const [checkState, setCheckState] = useState(false)
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0, skills: "", experts: "" });
  const containerRef = useRef<HTMLDivElement>(null); // 부모 컨테이너의 ref

  const handleMouseEnter = (content: string, event: React.MouseEvent) => {

    const buttonRect = event.currentTarget.getBoundingClientRect();


    const centerX = buttonRect.left - 220;
    const containerRect = containerRef.current?.getBoundingClientRect();
    const relativeLeft = buttonRect.right - containerRect!.left + 10; // 오른쪽에 약간의 여백 추가

    const relativeTop = buttonRect.top - containerRect!.top - 5;

    //const centerY = (buttonRect.bottom + buttonRect.top) / 2;


    //const centerX = buttonRect.left + buttonRect.width;
    const centerY = buttonRect.y;


    const text = { skills: "", experts: "" }
    switch (content) {
      case "씨샾": text.skills = "C# / Basic"; text.experts = `유니티를 사용한 개발에 사용한 적이 있습니다. \n팀 작업에 활용하였습니다.`; break;
      case "react": text.skills = "React / Familiar"; text.experts = `핵심적인 웹 기능 개발에 활용한 적이 있습니다. \n개인 / 팀 작업에 고루 활용하였습니다.`; break;
      case "TS": text.skills = "TypeScript / Familiar"; text.experts = `개인 프로젝트 개발에 활용한 적이 있습니다. \n개인 / 팀 작업에 고루 활용하였습니다.`; break;
      case "fm": text.skills = "Framer Motion / Basic"; text.experts = `개인 프로젝트 개발에 활용한 적이 있습니다. \n개인 작업에 활용하였습니다.`; break;
      case "js": text.skills = "JavaScript / Familiar"; text.experts = `프론트엔드 웹 개발에 포괄적으로 활용하였습니다.`; break;
      case "RC": text.skills = "React-Recoil / Familiar"; text.experts = `여러 컴포넌트에 활용되는 전역 변수 관리에 사용했습니다. \n개인 / 팀 작업에 고루 활용하였습니다.`; break;
      case "RQ": text.skills = "React-Query / Familiar"; text.experts = `API 통신의 원활한 관리에 사용했습니다. \n개인 / 팀 작업에 고루 활용하였습니다.`; break;
      case "sc": text.skills = "Styled-Components / Familiar"; text.experts = `전체적인 CSS 관리에 사용했습니다. \n개인 / 팀 작업에 고루 활용하였습니다.`; break;
      default: break;
    }
    setModalPosition({ top: relativeTop, left: relativeLeft, skills: text.skills, experts: text.experts })
    setCheckState(true);
    const rect = event.currentTarget.getBoundingClientRect();
  }

  const handleMouseLeave = () => {
    setCheckState(false)
  }

  return (<Container ref={containerRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
    <motion.h2>스킬 소개</motion.h2>
    <Line />
    <SkillContainer>
      {checkState && <SkillListTooltip top={modalPosition.top} left={modalPosition.left} skills={modalPosition.skills} experts={modalPosition.experts}></SkillListTooltip>}

      <SkillIcon onMouseEnter={(e) => handleMouseEnter("씨샾", e)} onMouseLeave={(e) => handleMouseLeave()} image={씨샾}> </SkillIcon>
      <SkillIcon onMouseEnter={(e) => handleMouseEnter("react", e)} onMouseLeave={(e) => handleMouseLeave()} image={react}></SkillIcon>
      <SkillIcon onMouseEnter={(e) => handleMouseEnter("TS", e)} onMouseLeave={(e) => handleMouseLeave()} image={TS}></SkillIcon>
      <SkillIcon onMouseEnter={(e) => handleMouseEnter("fm", e)} onMouseLeave={(e) => handleMouseLeave()} image={fm}></SkillIcon>
      <SkillIcon onMouseEnter={(e) => handleMouseEnter("js", e)} onMouseLeave={(e) => handleMouseLeave()} image={js}></SkillIcon>
      <SkillIcon onMouseEnter={(e) => handleMouseEnter("RC", e)} onMouseLeave={(e) => handleMouseLeave()} image={RC}></SkillIcon>
      <SkillIcon onMouseEnter={(e) => handleMouseEnter("RQ", e)} onMouseLeave={(e) => handleMouseLeave()} image={RQ}></SkillIcon>
      <SkillIcon onMouseEnter={(e) => handleMouseEnter("sc", e)} onMouseLeave={(e) => handleMouseLeave()} image={sc}></SkillIcon>
    </SkillContainer>

  </Container>)
}

export default SkillList;


const Line = styled.div`
  width: 25vw;
  height: 5px;
  background-color: rgba(235, 235, 235, 0.9);
  margin-bottom: 15px;
`
const SkillIcon = styled(motion.div) <{ image: any }>`
background-color: rgba(255, 255, 255, 1);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: rgba(255, 255, 255, 0);
  background-image: ${({ image }) => `url(${image})`};
  width: 130px;
  height: 130px;
  border: 2px solid black;
  border-radius: 9px;
  transition: transform 0.3s;
  position: relative;
  &:hover {
    transform: scale(1.1);
  }
`

const SkillContainer = styled(motion.div)`
display: grid;
grid-gap: 25px;
align-items: center;
  grid-template-columns: repeat(4, 1fr);
justify-content: center;
align-items: center;
width: 100%;
max-width: 30vw;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 화면이 1200px 이하일 때: 한 줄에 4개 */
max-width: 50vw;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr); /* 화면이 800px 이하일 때: 한 줄에 2개 */
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr); /* 화면이 800px 이하일 때: 한 줄에 2개 */
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr; /* 화면이 400px 이하일 때: 한 줄에 1개 */
  }
`

const Container = styled(motion.div)`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
position: relative;
height: 100%;
gap: 25px;

  h2 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: rgba(235, 235, 235, 1); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: black; font-size: 25px; font-family: inherit;}

`