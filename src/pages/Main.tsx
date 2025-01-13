import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, AnimationControls, delay, motion, MotionStyle, useAnimation } from 'framer-motion';
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

function nameText(index: number) {

    switch (index) {
        case 0: return (""); break;
        case 1: return (""); break;
        case 2: return (""); break;
        case 3: return (""); break;
    }

}

function Main() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isContentsOn, setIsContentsOn] = useState(false);
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();
    const controls1_1 = useAnimation();
    const controls2_1 = useAnimation();
    const controls3_1 = useAnimation();
    const controls4_1 = useAnimation();
    const controls1_2 = useAnimation();
    const controls2_2 = useAnimation();
    const controls3_2 = useAnimation();
    const controls4_2 = useAnimation();
    //const cardControlsArray = Array.from({ length: 4 }).map(() => controls);
    const cardControlsArray = [controls1, controls2, controls3, controls4];
    const cardMenuArray = [controls1_1, controls2_1, controls3_1, controls4_1];
    const cardSideArray = [controls1_2, controls2_2, controls3_2, controls4_2];

    //컨트롤스를 만들어 관리해야겠어 

    const handleMouseEnter = (index: number) => { console.log(index); console.log(clickedIndex); setHoveredIndex(index); };

    const handleMouseLeave = (index: number) => {// 해당 카드의 애니메이션만 중지
        console.log("asd")
        setHoveredIndex(null);
    };
    //const controls = useAnimation();
    const handleClick = (index: number | null) => {
        if (isAnimating == false) {
            setClickedIndex(hoveredIndex === index ? index : null);
        }
    };


    //버튼클릭 여기서 뱃지 삭제 출현도 설정해야해
    useEffect(() => {
        isAnimating == false && cardControlsArray.forEach((ctrl, i) => {
            cardControlsArray[i].stop();
            cardMenuArray[i].stop();
            cardSideArray[i].stop();
            //메인으로 선택되었을 때
            if (clickedIndex === i) {
                cardControlsArray[i!].start({ borderWidth: "9px", top: "10%", left: "15%", width: "70vw", height: "80vh", opacity: 1 })
                cardMenuArray[i!].start({ transition: { duration: 0.3 }, opacity: 0 })
                cardSideArray[i!].start({ transition: { duration: 0 }, opacity: 0 })
            }
            //사이드로 빠졌을 때
            else if (clickedIndex !== null) {
                cardControlsArray[i!].start({ borderWidth: "3px", top: positions[i!].clickedTop, left: "1%", width: "150px", height: "100px", opacity: 1 })
                cardMenuArray[i!].start({ transition: { duration: 0.3 }, opacity: 0 })
                cardSideArray[i!].start({ transition: { delay: 1.6, duration: 0.3 }, opacity: 1 })
            }
            //기본 화면일 때
            else {
                cardControlsArray[i!].start({ borderWidth: "9px", top: positions[i!].top, left: positions[i!].left, width: "300px", height: "400px", opacity: 1 })
                //이거를 좀 건드려야할 거 같아
                cardMenuArray[i!].start({ transition: { delay: 1.2, duration: 0.6 }, opacity: 1 })
            }
        })
    }, [clickedIndex])

    //투명도 조절 useEffect
    useEffect(() => {
        if (isAnimating == false) {
            cardControlsArray.forEach((ctrl, i) => {
                const a = cardControlsArray[i!]
                if (clickedIndex === null) {
                    if (hoveredIndex === null) {
                        cardControlsArray[i!].start({ transition: { duration: 0.3 }, opacity: 1 })
                    }
                    else if (hoveredIndex === i) {
                        cardControlsArray[i!].start({ transition: { duration: 0.3 }, opacity: 1 })
                    }
                    else if (hoveredIndex !== i) {
                        cardControlsArray[i!].start({ transition: { duration: 0.3 }, opacity: 0.3 })
                    }

                }
            })
        }
    }, [hoveredIndex])

    const positions = [
        //좌표 찌그러지는 위치 조정
        { top: "5%", left: "30%", clickedTop: "10%", clickedLeft: "10%" },
        { top: "5%", left: "50%", clickedTop: "25%", clickedLeft: "10%" },
        { top: "50%", left: "30%", clickedTop: "40%", clickedLeft: "10%" },
        { top: "50%", left: "50%", clickedTop: "55%", clickedLeft: "10%" },
    ];

    return (
        <AnimatePresence >
            <Container onClick={() => handleClick(null)}>

                <Card key={0 + "card"} index={0} selected={clickedIndex} animate={cardControlsArray[0]}
                    onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)} onClick={(e) => { e.stopPropagation(); isAnimating == false && handleClick(0); }}
                    style={{ top: positions[0].top, left: positions[0].left, }}
                    onAnimationStart={latest => setIsAnimating(true)} onAnimationComplete={latest => setIsAnimating(false)}
                    transition={{ ease: "easeInOut", delay: 0.4, duration: clickedIndex === 0 ? 1.4 : clickedIndex !== null ? 1.1 : 0.8 }}>
                    {[null, 0].includes(clickedIndex)
                        ? <motion.div animate={cardMenuArray[0]} onAnimationStart={() => console.log(cardMenuArray[0])} onAnimationComplete={() => console.log("완수")} initial={{ opacity: clickedIndex === 0 ? 0 : clickedIndex !== null ? 1 : 0 }}><CardBadge></CardBadge><h3>자기소개</h3><h3>ABOUTME</h3></motion.div>
                        : <motion.h3 animate={cardSideArray[0]} initial={{ opacity: 0 }}>자기소개</motion.h3>}
                </Card>

                <Card key={1 + "card"} index={1} selected={clickedIndex} animate={cardControlsArray[1]}
                    onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)} onClick={(e) => { e.stopPropagation(); isAnimating == false && handleClick(1); }}
                    style={{ top: positions[1].top, left: positions[1].left, }}
                    onAnimationStart={latest => setIsAnimating(true)} onAnimationComplete={latest => setIsAnimating(false)}
                    transition={{ ease: "easeInOut", delay: 0.4, duration: clickedIndex === 1 ? 1.4 : clickedIndex !== null ? 1.1 : 0.8 }}>
                    {[null, 1].includes(clickedIndex)
                        ? <motion.div animate={cardMenuArray[1]} onAnimationStart={() => console.log(cardMenuArray[1])} onAnimationComplete={() => console.log("완수")} initial={{ opacity: clickedIndex === 1 ? 0 : clickedIndex !== null ? 1 : 0 }}><CardBadge></CardBadge><h3>스킬소개</h3><h3>ABOUTME</h3></motion.div>
                        : <motion.h3 animate={cardSideArray[1]} initial={{ opacity: 0 }}>스킬소개</motion.h3>}
                </Card>

                <Card key={2 + "card"} index={2} selected={clickedIndex} animate={cardControlsArray[2]}
                    onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)} onClick={(e) => { e.stopPropagation(); isAnimating == false && handleClick(2); }}
                    style={{ top: positions[2].top, left: positions[2].left, }}
                    onAnimationStart={latest => setIsAnimating(true)} onAnimationComplete={latest => setIsAnimating(false)}
                    transition={{ ease: "easeInOut", delay: 0.4, duration: clickedIndex === 2 ? 1.4 : clickedIndex !== null ? 1.1 : 0.8 }}>

                    {[null, 2].includes(clickedIndex)
                        ? <motion.div animate={cardMenuArray[2]} onAnimationStart={() => console.log(cardMenuArray[2])} onAnimationComplete={() => console.log("완수")} initial={{ opacity: clickedIndex === 2 ? 0 : clickedIndex !== null ? 1 : 0 }}><CardBadge></CardBadge><h3>프로젝트</h3><h3>ABOUTME</h3></motion.div>
                        : <motion.h3 animate={cardSideArray[2]} initial={{ opacity: 0 }}>프로젝트</motion.h3>}
                </Card>

                <Card key={3 + "card"} index={3} selected={clickedIndex} animate={cardControlsArray[3]}
                    onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)} onClick={(e) => { e.stopPropagation(); isAnimating == false && handleClick(3); }}
                    style={{ top: positions[3].top, left: positions[3].left, }}
                    onAnimationStart={latest => setIsAnimating(true)} onAnimationComplete={latest => setIsAnimating(false)}
                    transition={{ ease: "easeInOut", delay: 0.4, duration: clickedIndex === 3 ? 1.4 : clickedIndex !== null ? 1.1 : 0.8 }}>

                    {[null, 3].includes(clickedIndex)
                        ? isContentsOn === true
                            ? /*01.13-여기를 애니메이션 추가하고 내용 들어갈 컴포넌트를 붙여, 그리고 조건 바꿔서 애니메이션 끝날 때 check값 바뀌게 해서 애니메이션 스무스하게*/ <motion.div transition={{ delay: 2, duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} > <h2>asdasd</h2> </motion.div>
                            : <motion.div animate={cardMenuArray[3]} onAnimationStart={() => console.log(cardMenuArray[3])} onAnimationComplete={() => { clickedIndex !== null && setIsContentsOn(true) }} initial={{ opacity: clickedIndex === 3 ? 0 : clickedIndex !== null ? 1 : 0 }}><CardBadge></CardBadge><h3>연락</h3><h3>ABOUTME</h3></motion.div>

                        : <motion.h3 animate={cardSideArray[3]} initial={{ opacity: 0 }}>연락</motion.h3>}
                </Card>
                {/*Array.from({ length: 4 }).map((_, index) => (

                    <Card key={index + "card"} index={index} selected={clickedIndex} isAni={isAnimating}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        style={{top: positions[index].top, left: positions[index].left,}}
                        animate={cardControlsArray[index]}
                        onClick={(e) => {e.stopPropagation(); isAnimating == false && handleClick(index);}}
                        onAnimationStart={latest => setIsAnimating(true)}
                        onAnimationComplete={latest => setIsAnimating(false)}
                        transition={{ ease: "easeInOut", duration: clickedIndex === index ? 1.4 : clickedIndex !== null ? 1.1 : 0.8 }}>
                            {clickedIndex === index ? null : clickedIndex !== null ? <h3>테스트2</h3> : <h2>테스트</h2>}
                    </Card>
                ))*/}
            </Container></AnimatePresence>)
}
export default Main;

const CardBadge = styled.div`
    width: 150px;
    height: 150px;
   background-color: honeydew;
`

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

