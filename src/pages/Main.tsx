import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, AnimationControls, motion, MotionStyle, useAnimation } from 'framer-motion';
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
    const [aniCheck, setAniCheck] = useState(Boolean);

    //컨트롤스를 만들어 관리해야겠어

    const handleMouseEnter = (index: number) => { console.log(index); clickedIndex === null && setHoveredIndex(index); };

    const handleMouseLeave = () => { console.log(hoveredIndex); controls.stop(); setHoveredIndex(null); };

    const controls = useAnimation();
    const handleClick = (index: number | null) => {
        console.log("발동")
        console.log(index)
        controls.stop();
        if (clickedIndex === index) {
            controls.start({ top: "10%", left: "15%", width: "70vw", height: "80vh", opacity: "1" })
        }
        else if (clickedIndex !== null) {
            controls.start({ top: positions[index!].clickedTop, left: "1%", width: "150px", height: "100px", opacity: "0" })
        }
        else {
            controls.start({ top: positions[index!].top, left: positions[index!].left, width: "300px", height: "400px", opacity: "1" })

        }
        setClickedIndex(hoveredIndex === index ? index : null);
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

                {Array.from({ length: 4 }).map((_, index) => (

                    <Card
                        key={index + "card"}
                        index={index}
                        selected={clickedIndex}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            top: positions[index].top,
                            left: positions[index].left,
                        }}
                        animate={controls}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick(index);
                        }}
                        /** */
                        transition={{ ease: "easeInOut", duration: clickedIndex === index ? 1.7 : clickedIndex !== null ? 1.3 : 0.8 }}

                    >{clickedIndex === index ? null : clickedIndex !== null ? <h3>테스트2</h3> : <h2>테스트</h2>}

                    </Card>
                ))}
            </Container></AnimatePresence>)
}
/*
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
                                        : 1, // 기본 세로 크기
                                        scale:
                                        hoveredIndex === null
                                            ? 1 // 모든 카드 기본 크기
                                            : hoveredIndex === index
                                                ? 1.1 // 마우스가 올려진 카드의 크기
                                                : 0.9, // 마우스가 올려지지 않은 카드의 크기
                                }}
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
    align-items: center;
    text-align: center;
    justify-content: center;
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

