import React from 'react';
import styled from "styled-components";
import {Button} from "../../assets/styles/stylesComponents";


type ProjectItemType = {
    title: string
    description: string
    img: string
}


const ProjectItem: React.FC<ProjectItemType> = ({title, description, img}) => {
    return (
        <ProjectItemBlock>
            <ProjectImg>
                <img src={img} alt=""/>
                <HoverBlock>
                    <Button>View</Button>
                </HoverBlock>
            </ProjectImg>
            <div>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDesc>{description}</ProjectDesc>
            </div>
        </ProjectItemBlock>
    );
};

export default ProjectItem;

export const HoverBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.68);
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
`

const ProjectItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 calc(100% / 3);
  margin-bottom: 50px;
  padding: 0 15px;
  @media (max-width: 770px) {
    flex: 1 1 50%;;
  }
  @media (max-width: 450px) {
    flex: 1 1 100%;
    margin-bottom: 25px;
  }
`
const ProjectImg = styled.div`
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
  padding-top: 65%;

  & img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    div {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`

const ProjectDesc = styled.p`

  display: block;
  color: var(--light-gray-color);
`
const ProjectTitle = styled.h4`

  display: inline-block;
  position: relative;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 15px;

  &:after {
    content: '';
    position: absolute;
    height: 2px;
    background-color: var(--main-color);
    width: 70%;
    left: 0;
    bottom: -5px;
  }
`