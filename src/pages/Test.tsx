import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, AnimationControls, delay, motion, MotionStyle, useAnimation, Variants } from 'framer-motion';
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


function Test() {
    const [isInitial, setIsInitial] = useState(true);
    const [isAni, setIsAni] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const testVariants: Variants = {
        initialBlue: { opacity: 0, x: 200 },
        initialPink: { opacity: 0, x: -100 },
    }
    const mainVariants: Variants = {
        getContent: { borderWidth: "9px", top: "10%", left: "15%", width: "70vw", height: "80vh", opacity: 1 },
        getSide0: { borderWidth: "3px", top: "10%", left: "1%", width: "150px", height: "100px", opacity: 1 },
        getSide1: { borderWidth: "3px", top: "25%", left: "1%", width: "150px", height: "100px", opacity: 1 },
        getSide2: { borderWidth: "3px", top: "40%", left: "1%", width: "150px", height: "100px", opacity: 1 },
        getSide3: { borderWidth: "3px", top: "55%", left: "1%", width: "150px", height: "100px", opacity: 1 },
        getMain0: { borderWidth: "3px", top: "5%", left: "30%", width: "300px", height: "400px", opacity: 1 },
        getMain1: { borderWidth: "3px", top: "5%", left: "50%", width: "300px", height: "400px", opacity: 1 },
        getMain2: { borderWidth: "3px", top: "50%", left: "30%", width: "300px", height: "400px", opacity: 1 },
        getMain3: { borderWidth: "3px", top: "50%", left: "50%", width: "300px", height: "400px", opacity: 1 },
        //겟main 짤 것
    }

    const positions = [
        //좌표 찌그러지는 위치 조정
        { top: "5%", left: "30%", clickedTop: "10%", clickedLeft: "10%" },
        { top: "5%", left: "50%", clickedTop: "25%", clickedLeft: "10%" },
        { top: "50%", left: "30%", clickedTop: "40%", clickedLeft: "10%" },
        { top: "50%", left: "50%", clickedTop: "55%", clickedLeft: "10%" },
    ];

    const cardAni = (thisNum?: number) => {

        //console.log(thisNum)
        //클릭이 null, 기본화면이면 
        if (clickedIndex === null) {
            switch (thisNum) {
                case 0: return "getMain0";
                case 1: return "getMain1";
                case 2: return "getMain2";
                case 3: return "getMain3";
            }
        }
        //클릭된 것이면
        if (thisNum === clickedIndex) {
            return "getContent";
        }
        else {
            switch (thisNum) {
                case 0: return "getSide0";
                case 1: return "getSide1";
                case 2: return "getSide2";
                case 3: return "getSide3";
            }
        };
        return "getContent";
    }

    const Clicked = (clicked?: number) => {
        if (isAni == false) {
            let a = clicked ?? 5
            setIsInitial(!isInitial)
            setClickedIndex(clicked ?? null)
        }
        console.log(clickedIndex)
    }
    //is이니셜이 문제인데
    //버튼 누르면 카드 커지는거 차례
    return (
        <Container onClick={() => Clicked()}>
            <AnimatePresence mode='wait'>
                <Card onClick={(e) => { e.stopPropagation(); Clicked(0) }} variants={mainVariants} style={{ top: "5%", left: "30%" }} index={0} selected={0} animate={cardAni(0)} transition={{ duration: 2 }}>
                    <AnimatePresence mode='wait'>
                        {clickedIndex === null &&
                            <motion.div key={"with-initial00"} initial={isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>메인</h2></motion.div>}
                        {clickedIndex === 0 &&
                            <motion.div key={"with-initial01"} initial={!isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>콘텐츠</h2></motion.div>
                        }
                        {clickedIndex !== null && clickedIndex !== 0 &&
                            <motion.div key={"with-initial02"} initial={!isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>사이드</h2></motion.div>
                        }
                    </AnimatePresence>
                </Card>
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                <Card onClick={(e) => { e.stopPropagation(); Clicked(1) }} variants={mainVariants} style={{ top: "5%", left: "50%" }} index={1} selected={1} animate={cardAni(1)} transition={{ duration: 2 }}>
                    <AnimatePresence mode='wait'>
                        {clickedIndex === null &&
                            <motion.div key={"with-initial10"} initial={isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>메인</h2></motion.div>}
                        {clickedIndex === 1 &&
                            <motion.div key={"with-initial11"} initial={!isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>콘텐츠</h2></motion.div>
                        }
                        {clickedIndex !== null && clickedIndex !== 1 &&
                            <motion.div key={"with-initial12"} initial={!isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>사이드</h2></motion.div>
                        }
                    </AnimatePresence>
                </Card>
            </AnimatePresence>
            {/** 
            <Card onClick={() => Clicked(0)} variants={mainVariants} style={{ top: "5%", left: "30%" }} index={1} selected={1}>
                <button onClick={() => Clicked(0)}>{isInitial ? "스테이트 투르" : "스테이트 폴스"}</button>
                <AnimatePresence mode='wait'>
                    {isInitial && clickedIndex === null
                        ? <motion.div key={"with-initial"} initial={isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                            animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>메인</h2></motion.div>
                        : <motion.div key={"with-initial1"} initial={!isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                            animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>콘텐츠</h2></motion.div>
                    }
                </AnimatePresence>
            </Card>
            <Card variants={mainVariants} style={{ top: "5%", left: "50%" }} index={2} selected={2}>
                <button onClick={() => Clicked(1)}>{isInitial ? "스테이트 투르" : "스테이트 폴스"}</button>
                <AnimatePresence mode='wait'>
                    {isInitial && clickedIndex === null
                        ? <motion.div key={"with-initial"} initial={isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                            animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>asd</h2></motion.div>
                        : <motion.div key={"with-initial1"} initial={!isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                            animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>zzzz</h2></motion.div>
                    }
                </AnimatePresence>
            </Card>
            <Card index={3} selected={3} style={{ top: "50%", left: "30%" }}>
                <button onClick={Clicked}>{isInitial ? "스테이트 투르" : "스테이트 폴스"}</button>
                <AnimatePresence mode='wait'>
                    {isInitial
                        ? <motion.div key={"with-initial"} initial={isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                            animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>asd</h2></motion.div>
                        : <motion.div key={"with-initial1"} initial={!isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                            animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>zzzz</h2></motion.div>
                    }
                </AnimatePresence>
            </Card>*/}

        </Container >
    );
}

export default Test;

const Card = styled(motion.div) <{ index: number, selected: number | null }>`
position: absolute;
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background-color: rgba(30,30,30,1);
    border: 9px solid rgba(255, 255, 255, 0.8);
    /*border: ${({ index, selected }) => (selected === null ? `9px solid rgba(255, 255, 255, 0.8)` : index === selected ? `9px solid rgba(255, 255, 255, 0.8)` : `3px solid rgba(255, 255, 255, 0.8)`)} ;*/
    border-radius: 10px;
align-items: center;
z-index: ${({ index, selected }) => (index === selected ? 999 : index)};
&:hover {
    cursor: pointer;
}

`
const Container = styled(motion.div)`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
     align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:15px;
    background-color: rgba(30, 30, 30, 1);;
`

