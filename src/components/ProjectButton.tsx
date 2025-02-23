import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ProjectTemplet } from '../utils/types';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { motion } from 'framer-motion';
import { ProjectExplain } from '../store/atom';


function ProjectButton(value: ProjectTemplet) {
  const [ProjectExplainState, setProjectExplainState] = useRecoilState(ProjectExplain)

  return (<ProjectButtonBox name={value.name} explain={ProjectExplainState} onClick={() => setProjectExplainState(value.name as string)}>
    <h1>{value.name}</h1>
  </ProjectButtonBox>)
}

export default ProjectButton


const ProjectButtonBox = styled(motion.div) <ProjectTemplet>`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
    width: 200px;
    height: 80px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
    border: 3px solid rgba(235 235, 235, 0.8);
    cursor: pointer;
    filter: ${(props) => (props.name == props.explain ? `brightness(120%)` : `brightness(80%)`)};
  &:hover{
    filter: brightness(110%);
    background-color: rgba(235, 235, 235, 0.1);
  }
  &:active {
    filter: brightness(130%); /* 클릭 시 밝기 감소 효과 */
    background-color: rgba(235, 235, 235, 0.3);
  }
  h1 {word-spacing: 1px; word-break:keep-all; color: rgba(235 235, 235, 0.8); font-size: 21px; font-family: inherit;}

  @media (max-width: 1400px) {
    width: 150px;
    height: 80px;
    h1 {word-spacing: 1px; word-break:keep-all; color: rgba(235 235, 235, 0.8); font-size: 17px; font-family: inherit;}
  }
`