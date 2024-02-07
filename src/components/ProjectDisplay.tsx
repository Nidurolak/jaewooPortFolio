import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ProjectTemplet } from '../utils/types';
import { ProjectExplain } from '../store/atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { motion } from 'framer-motion';
import title from '../assets/title.png';
import aj from '../assets/aj.png';
import navis from '../assets/navis.png';
import 재우 from '../assets/재우.png';


function ProjectDisplay(value: ProjectTemplet) {
    const [ProjectExplainState, setProjectExplainState] = useRecoilState(ProjectExplain)

    let componentToRender;
    const ProjectVariant = {
        init : {y: 0, opacity: 0, },
        visible : {y: 0, opacity: 1, transition: { duration: 1 }},
        exit: {y: 0, opacity: 0, transition: { duration: 1 }}
      }

    switch (ProjectExplainState) {
        case 'Navis':
            componentToRender = <ProjectBox variants={ProjectVariant} initial='init' animate='visible' exit='exit' key='EXPKey0'>
                <h2>{ProjectExplainState}</h2>
                <h3>2023.3 ~ 2023.4</h3>
                <h4>소규모 팀 업무 및 일정, 과제 관리 서비스</h4>
                <h4>사용 기술 : React, Recoil, React-Query & Styled-Component, Axios</h4>
                <DisPlayIMG image={navis}></DisPlayIMG>
            </ProjectBox>;
            break;
        case "재우's AI다운로더":
            componentToRender = <ProjectBox variants={ProjectVariant} initial='init' animate='visible' exit='exit' key='EXPKey1'>
                <h2>{ProjectExplainState}</h2>
                <h3>2023.12 ~ 2024.1</h3>
                <h4>게임 마비노기의 AI 정보 열람 및 다운로드 사이트</h4>
                <h4>사용 기술 : TypeScript, React, Recoil, Styled-Component, Framer-Motion</h4>
                <DisPlayIMG image={재우}></DisPlayIMG>
                </ProjectBox>; break;
        case 'AJGAG':
            componentToRender = <ProjectBox variants={ProjectVariant} initial='init' animate='visible' exit='exit' key='EXPKey2'>
                <h2>{ProjectExplainState}</h2>
                <h3>2023.8</h3>
                <h4>아재 개그를 올리고 평가를 주고받는 사이트</h4>
                <h4>사용 기술 : TypeScript, React, Recoil, React-Query & Styled-Component, Axios</h4>
                <DisPlayIMG image={aj}></DisPlayIMG>

                </ProjectBox>; break;
        case '골디락스존':
            componentToRender = <ProjectBox variants={ProjectVariant} initial='init' animate='visible' exit='exit' key='EXPKey3'>
                <h2>{ProjectExplainState}</h2>
                <h3>2019 ~ 2020(중단)</h3>
                <h4>유니티 턴제 기반 생존 도시 건설 게임</h4>
                <DisPlayIMG image={title}></DisPlayIMG>
                
                </ProjectBox>; break;
        default: break;
    }

    return (<ProjectDisplayBox key='EXPKey'>
        {componentToRender}
        </ProjectDisplayBox>)
}

export default ProjectDisplay

const DisPlayIMG = styled.div<{ image: any }>`
background-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: rgba(255, 255, 255, 0);
  width: 100%;
  height: 100%;
  min-height: 400px;
  background-image: ${({ image }) => `url(${image})`};
  margin-top: 10px;
  border: 5px solid black;
  border-radius: 5px;
`

const ProjectBox = styled(motion.div)`
display: flex;
align-items: center;
justify-content: flex-end;
flex-direction: column;
padding-top: 15px;
    width: 100%;
    height: 100%;
    background-color: rgba(240, 240, 240, 0);
`

const ProjectDisplayBox = styled(motion.div)`
width: 600px;
height: 550px;
background-color:  rgba(240, 240, 240, 0);
  h2 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 750; color: rgb(25, 76, 138);; font-size: 55px; font-family: inherit;}
  h3 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: gray; font-size: 25px; font-family: inherit;}
  h4 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; font-weight: 450; color: black; font-size: 17px; font-family: inherit;}

`