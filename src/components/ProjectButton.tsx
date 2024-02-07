import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ProjectTemplet } from '../utils/types';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { motion } from 'framer-motion';
import { ProjectExplain } from '../store/atom';


function ProjectButton(value: ProjectTemplet){
    const [ProjectExplainState, setProjectExplainState] = useRecoilState(ProjectExplain)

    return(<ProjectButtonBox name = {value.name} explain={ProjectExplainState} onClick={()=> setProjectExplainState(value.name as string)}>
        <h1>{value.name}</h1>
        </ProjectButtonBox>)
}

export default ProjectButton


const ProjectButtonBox = styled(motion.div)<ProjectTemplet>`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
    width: 200px;
    height: 80px;
    border-radius: 5px;
    background-color: rgba(210, 210, 210, 1);
    border: 3px solid rgb(70, 70, 70);;
    cursor: pointer;
    filter: ${(props) => (props.name == props.explain ? `brightness(100%)` : `brightness(80%)`)};
  &:hover{
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(130%); /* 클릭 시 밝기 감소 효과 */
  }
  h1 {word-spacing: 1px; word-break:keep-all; padding-left: 10px; color: white; font-size: 21px; font-family: inherit;}

`