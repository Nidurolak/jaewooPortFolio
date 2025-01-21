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
        //겟main 짤 것
    }

    const positions = [
        //좌표 찌그러지는 위치 조정
        { top: "5%", left: "30%", clickedTop: "10%", clickedLeft: "10%" },
        { top: "5%", left: "50%", clickedTop: "25%", clickedLeft: "10%" },
        { top: "50%", left: "30%", clickedTop: "40%", clickedLeft: "10%" },
        { top: "50%", left: "50%", clickedTop: "55%", clickedLeft: "10%" },
    ];


    const Clicked = () => {
        if (isAni == false) {
            setIsInitial(!isInitial)
        }
    }
    return (
        <Container>
            <Card index={3} selected={1}>
                <button onClick={Clicked}>{isInitial ? "스테이트 투르" : "스테이트 폴스"}</button>
                <AnimatePresence mode='wait'>
                    {isInitial
                        ? <motion.div key={"with-initial"} initial={isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                            animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>asd</h2></motion.div>
                        : <motion.div key={"with-initial1"} initial={!isInitial ? { opacity: 0, } : false} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                            animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}><h2>zzzz</h2></motion.div>
                    }
                </AnimatePresence>
            </Card>

        </Container>
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

