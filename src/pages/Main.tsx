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
import { CheckWebSize } from '../hooks/CheckWebSize';
import { ResponsiveContentLeft, ResponsiveHeight, ResponsiveWidth } from '../hooks/ResponsiveSize';
import contact from '../assets/contact.svg'
import aboutme from '../assets/aboutme.svg'
import project from '../assets/project.svg'
import skill from '../assets/skill.svg'


function Main() {
    const [isInitial, setIsInitial] = useState(true);
    const [isAni, setIsAni] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const testVariants: Variants = {
        initialBlue: { opacity: 0, x: 200 },
        initialPink: { opacity: 0, x: -100 },
    }


    const { width, height } = CheckWebSize(100)
    useEffect(() => {
        console.log(`현재 웹 너비: ${width}px, 높이: ${height}px`);
    }, [width, height]);

    const mainVariants: Variants = {
        getContent: { borderWidth: "9px", top: "10%", left: ResponsiveContentLeft(width), width: "70vw", height: "80vh", opacity: 1 },
        getSide0: { borderWidth: "3px", top: "20%", left: "1%", width: "150px", height: "100px", opacity: 1 },
        getSide1: { borderWidth: "3px", top: "35%", left: "1%", width: "150px", height: "100px", opacity: 1 },
        getSide2: { borderWidth: "3px", top: "50%", left: "1%", width: "150px", height: "100px", opacity: 1 },
        getSide3: { borderWidth: "3px", top: "65%", left: "1%", width: "150px", height: "100px", opacity: 1 },
        getMain0: { borderWidth: "9px", top: "5%", left: "30%", width: ResponsiveWidth(width), height: ResponsiveHeight(height), opacity: 1 },
        getMain1: { borderWidth: "9px", top: "5%", left: "50%", width: ResponsiveWidth(width), height: ResponsiveHeight(height), opacity: 1 },
        getMain2: { borderWidth: "9px", top: "50%", left: "30%", width: ResponsiveWidth(width), height: ResponsiveHeight(height), opacity: 1 },
        getMain3: { borderWidth: "9px", top: "50%", left: "50%", width: ResponsiveWidth(width), height: ResponsiveHeight(height), opacity: 1 },
        getHoverdIn: { opacity: 0.5, transition: { duration: 3 } },
        getHoverdOut: { opacity: 1, transition: { duration: 3 } }
        //겟main 짤 것
    }



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
            if (a !== clickedIndex) {
                setIsInitial(!isInitial)
            }
            setClickedIndex(clicked ?? null)
        }
        console.log(clickedIndex)
    }
    //is이니셜이 문제인데
    //버튼 누르면 카드 커지는거 차례
    return (
        <Container onClick={() => Clicked()}>
            <AnimatePresence mode='wait'>
                <Card key={"card0"} onClick={(e) => { e.stopPropagation(); Clicked(0) }} variants={mainVariants} style={{ top: "5%", left: "30%" }} index={0} selectednum={0} selectedcurrent={clickedIndex} animate={cardAni(0)} transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}>
                    <AnimatePresence mode='wait'>
                        {clickedIndex === null &&
                            <motion.div key={"with-initial00"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><CardBadge image={aboutme}></CardBadge><motion.h3>자기소개</motion.h3><motion.h3>About Me</motion.h3></motion.div>}
                        {clickedIndex === 0 &&
                            <motion.div key={"with-initial01"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ delay: 1 }} exit={{ opacity: 0 }}><AboutMeList></AboutMeList></motion.div>
                        }
                        {clickedIndex !== null && clickedIndex !== 0 &&
                            <motion.div key={"with-initial02"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><h3>자기소개</h3></motion.div>
                        }
                    </AnimatePresence>
                </Card>
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                <Card key={"card1"} onClick={(e) => { e.stopPropagation(); Clicked(1) }} variants={mainVariants} style={{ top: "5%", left: "50%" }} index={1} selectednum={1} selectedcurrent={clickedIndex} animate={cardAni(1)} transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}>
                    <AnimatePresence mode='wait'>
                        {clickedIndex === null &&
                            <motion.div key={"with-initial10"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><CardBadge image={skill}></CardBadge><motion.h3>스킬소개</motion.h3><motion.h3>Skill</motion.h3></motion.div>}
                        {clickedIndex === 1 &&
                            <motion.div key={"with-initial11"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><SkillList></SkillList></motion.div>
                        }
                        {clickedIndex !== null && clickedIndex !== 1 &&
                            <motion.div key={"with-initial12"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><h3>스킬소개</h3></motion.div>
                        }
                    </AnimatePresence>
                </Card>
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                <Card key={"card2"} onClick={(e) => { e.stopPropagation(); Clicked(2) }} variants={mainVariants} style={{ top: "50%", left: "30%" }} index={2} selectednum={2} selectedcurrent={clickedIndex} animate={cardAni(2)} transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}>
                    <AnimatePresence mode='wait'>
                        {clickedIndex === null &&
                            <motion.div key={"with-initial20"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><CardBadge image={project}></CardBadge><motion.h3>프로젝트</motion.h3><motion.h3>Project</motion.h3></motion.div>}
                        {clickedIndex === 2 &&
                            <motion.div key={"with-initial21"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><ProjectList></ProjectList></motion.div>
                        }
                        {clickedIndex !== null && clickedIndex !== 2 &&
                            <motion.div key={"with-initial22"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><h3>프로젝트</h3></motion.div>
                        }
                    </AnimatePresence>
                </Card>
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                <Card key={"card3"} onClick={(e) => { e.stopPropagation(); Clicked(3) }} variants={mainVariants} style={{ top: "50%", left: "50%" }} index={3} selectednum={3} selectedcurrent={clickedIndex} animate={cardAni(3)} transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}>
                    <AnimatePresence mode='wait'>
                        {clickedIndex === null &&
                            <motion.div key={"with-initial30"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><CardBadge image={contact}></CardBadge><motion.h3>연락</motion.h3><motion.h3>Contact</motion.h3></motion.div>}
                        {clickedIndex === 3 &&
                            <motion.div key={"with-initial31"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><ContactList></ContactList></motion.div>
                        }
                        {clickedIndex !== null && clickedIndex !== 3 &&
                            <motion.div key={"with-initial32"} initial={{ opacity: 0, }} onAnimationStart={() => setIsAni(true)} onAnimationComplete={() => setIsAni(false)}
                                animate={{ opacity: 1 }} transition={{ duration: 1.5 }} exit={{ opacity: 0 }}><h3>연락</h3></motion.div>
                        }
                    </AnimatePresence>
                </Card>
            </AnimatePresence>

        </Container >
    );
}

export default Main;

const CardBadge = styled.div<{ image?: any }>`
    width: 150px;
    height: 150px;
   background-color: rgba(0,0,0,0);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
  color: rgba(255, 255, 255, 0);
`
const Card = styled(motion.div) <{ index: number, selectednum: number | null, selectedcurrent: number | null }>`
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
    /*border: ${({ index, selectednum }) => (selectednum === null ? `9px solid rgba(255, 255, 255, 0.8)` : index === selectednum ? `9px solid rgba(255, 255, 255, 0.8)` : `3px solid rgba(255, 255, 255, 0.8)`)} ;*/
    border-radius: 10px;
align-items: center;
z-index: ${({ index, selectednum }) => (index === selectednum ? 999 : index)};
&:hover {
    cursor: ${({ selectedcurrent, selectednum }) => (selectedcurrent === null ? "pointer" : selectedcurrent !== selectednum ? "pointer" : "default")};
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

