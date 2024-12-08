import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useRecoilState } from 'recoil';
import ProjectButton from '../components/ProjectButton';
import ProjectDisplay from '../components/ProjectDisplay';
import MainTitle from '../components/MainTitle';
import ButtonBox from '../components/ButtonBox';
import SkillList from '../components/SkillList';
import AboutMeList from '../components/AboutMeList';
import ProjectList from '../components/ProjectList';
import ContactList from '../components/ContactList';
import { Element, scroller } from 'react-scroll';
import SkillListTooltip from '../components/SkillListTooltip';

function Main() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleClick = (index: number | null) => {

        setClickedIndex(clickedIndex === index ? null : index);
    };
    const positions = [
        //좌표 찌그러지는 위치 조정
        { top: "5%", left: "30%", clickedTop: "10%", clickedLeft: "10%" },
        { top: "5%", left: "50%", clickedTop: "25%", clickedLeft: "10%" },
        { top: "50%", left: "30%", clickedTop: "40%", clickedLeft: "10%" },
        { top: "50%", left: "50%", clickedTop: "55%", clickedLeft: "10%" },
    ];

    return (
        <AnimatePresence mode='wait'>
            <Container onClick={() => handleClick(null)}>

                {/*
            <MainTitle />
            <AnimatePresence>
                <Element name="AboutMe"><AboutMeList /></Element>
                <Element name="Skill"><SkillList key='Skill' /></Element>

            </AnimatePresence>
            <Element name="Project"><ProjectList /></Element>
            <Element name="Contact"><ContactList /></Element>
                <Card
                    key={0 + "card"} index={0}
                    onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}
                    onClick={(e) => { e.stopPropagation(); handleClick(0); }}
                    style={{ top: positions[0].top, left: positions[0].left }}
                    animate={{
                        top: clickedIndex === 0 ? "0%" // 클릭된 카드의 상단 기준점
                            : clickedIndex !== null
                                ? "0%" // 클릭된 상태에서 다른 카드의 상단 기준점
                                : positions[0].top, // 기본 상단 기준점
                        left: clickedIndex === 0
                            ? "0%" // 클릭된 카드의 상단 기준점
                            : clickedIndex !== null
                                ? "0%" // 클릭된 상태에서 다른 카드의 상단 기준점
                                : positions[0].left, // 기본 상단 기준점
                        width: clickedIndex === 0
                            ? "100vw" // 클릭된 카드의 가로 크기
                            : clickedIndex !== null
                                ? "0px" // 클릭된 상태에서 다른 카드의 가로 크기
                                : "300px", // 기본 가로 크기
                        height: clickedIndex === 0
                            ? "100vh" // 클릭된 카드의 세로 크기
                            : clickedIndex !== null
                                ? "0px" // 클릭된 상태에서 다른 카드의 세로 크기
                                : "400px", // 기본 세로 크기
                    }}
                    transition={{ duration: 0.7 }}
                />*/}

                {Array.from({ length: 4 }).map((_, index) => (

                    <Card
                        key={index + "card"}
                        index={index}
                        selected={clickedIndex}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick(index);
                        }}
                        style={{
                            top: positions[index].top,
                            left: positions[index].left,
                        }}
                        animate={{
                            top:
                                clickedIndex === index
                                    ? "10%" // 클릭된 카드의 상단 기준점
                                    : clickedIndex !== null
                                        ? positions[index].clickedTop // 클릭된 상태에서 다른 카드의 상단 기준점
                                        : positions[index].top, // 기본 상단 기준점
                            left:
                                clickedIndex === index
                                    ? "15%" // 클릭된 카드의 상단 기준점
                                    : clickedIndex !== null
                                        ? "1%" // 클릭된 상태에서 다른 카드의 상단 기준점
                                        : positions[index].left, // 기본 상단 기준점
                            width:
                                clickedIndex === index
                                    ? "70vw" // 클릭된 카드의 가로 크기
                                    : clickedIndex !== null
                                        ? "150px" // 클릭된 상태에서 다른 카드의 가로 크기
                                        : "300px", // 기본 가로 크기
                            height:
                                clickedIndex === index
                                    ? "80vh" // 클릭된 카드의 세로 크기
                                    : clickedIndex !== null
                                        ? "100px" // 클릭된 상태에서 다른 카드의 세로 크기
                                        : "400px", // 기본 세로 크기
                            /*opacity:
                                clickedIndex === index
                                    ? 1 // 클릭된 카드의 세로 크기
                                    : clickedIndex !== null
                                        ? 0 // 클릭된 상태에서 다른 카드의 세로 크기
                                        : 1, // 기본 세로 크기*/
                        }}
                        transition={{ ease: "easeInOut", duration: clickedIndex === index ? 1.7 : clickedIndex !== null ? 1.3 : 0.8 }}

                    ><h2>테스트</h2></Card>
                ))}
            </Container></AnimatePresence>)
}
/*

 */
export default Main;

const CardBox = styled.div`
display: grid;
align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
justify-content: center;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 화면이 1200px 이하일 때: 한 줄에 4개 */
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr); /* 화면이 800px 이하일 때: 한 줄에 2개 */
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr); /* 화면이 800px 이하일 때: 한 줄에 2개 */
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr); /* 화면이 400px 이하일 때: 한 줄에 1개 */
  }
`

const Card = styled(motion.div) <{ index: number, selected: number | null }>`
position: absolute;
    width: 300px;
    height: 400px;
    display: flex;
    background-color: rgba(30,30,30,1);
    border:  9px solid rgba(255, 255, 255, 0.8);
    border-radius: 10px;
align-items: center;
z-index: ${({ index, selected }) => (index === selected ? 999 : index)};
&:hover {
    cursor: pointer;
}

`

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
/*     align-items: center;
    justify-content: center;
    flex-direction: center;*/
    background-color: rgba(30, 30, 30, 1);;
`

