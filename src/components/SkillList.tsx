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
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (content: string, event: React.MouseEvent) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    setModalPosition({ top: centerY + 400, left: centerX + 80 })
    setCheckState(true);
    const rect = event.currentTarget.getBoundingClientRect();
    console.log("Element Coordinates: ", rect);
    console.log("Element X: ", rect.x, "Element Y: ", rect.y);
    console.log("adsasdas")
    console.log(checkState)
  }

  const handleMouseLeave = () => {
    setCheckState(false)
  }

  /*
  
  const handleMouseEnter = (content: string, event: React.MouseEvent) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    setModalPosition({ top: centerY + 20, left: centerX - 125 })
    //console.log(tooltipUp)
    switch (content) {
      case '윈드밀 반응 복귀': toolTipContents.current = '주인의 윈드밀 장전에 반응하여 모든 행동을 정지, 주인 위치로 복귀합니다. 빠른 탑승이 가능해 맵 이동 시 끼어있는 펫을 꺼낼 때에도 유용합니다.'; break;
      case '자동 원거리 견제': toolTipContents.current = '펫, 주인을 노리는 원거리 공격에 반응하는 견제 패턴입니다. 즉시 모든 행동을 중지, 근접 공격으로 빠르게 견제합니다. 거리에 따라 실패할 수 있습니다.'; break;
      case '자동 파볼트 견제': toolTipContents.current = '펫, 주인을 노리는 원거리 공격에 반응하는 견제 패턴입니다. 준비된 파볼트 공격으로 빠르게 견제합니다. 거리에 따라 실패할 수 있습니다.'; break;
      case '자동 신속 발동': toolTipContents.current = '전투 중 신속 게이지가 가득 차면 가능한 즉시 신속의 날개를 발동시킵니다. 특성을 자주 까먹어도 이제 펫이 챙겨줍니다.'; break;
    }
    //setTimeout(() => {settooltipUP(true)}, 500)
    settooltipUP(true)
  };
  const handleMouseLeave = (content: string, event: React.MouseEvent) => {
    settooltipUP(false)
  }
 */

  return (<Container>
    <h2>Skills</h2>
    <Line />
    <SkillContainer>
      {checkState && <SkillListTooltip top={modalPosition.top} left={modalPosition.left}></SkillListTooltip>}
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

const Tooltip = styled.div`
  position: absolute;
  top: 50%;
  left: 140%; /* Adjust to position it next to the icon */
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
`;


const Line = styled.div`
  width: 25vw;
  height: 5px;
  background-color: rgba(30, 30, 30, 0.9);
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
grid-gap: 20px;
align-items: center;
  grid-template-columns: repeat(6, 2fr);
justify-content: center;
align-items: center;
width: 100%;
max-width: 50vw;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr); /* 화면이 1200px 이하일 때: 한 줄에 4개 */
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
width: 1200px;
max-height: fit-content;
gap: 25px;
margin-bottom: 150px;

  h2 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: rgba(30, 30, 30, 0.9); font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: black; font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; font-weight: 450; color: gray; font-size: 27px; font-family: inherit;}

`