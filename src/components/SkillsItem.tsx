import React from 'react';
import styled, {css} from "styled-components";

type SkillsItemType = {
    icon: string
    title: string
    isMain?: boolean
    desc?: string
}

const SkillsItem: React.FC<SkillsItemType> = ({icon, title, isMain, desc}) => {
    return (
        <SkillsItemBlock isMain={isMain}>
            <SkillImg isMain={isMain}>
                <img src={icon} alt=""/>
                <BorderTopBottom className={'tb'}></BorderTopBottom>
                <BorderLeftRight className={'lr'}></BorderLeftRight>
            </SkillImg>
            <div>
            <SkillsTitle>{title}</SkillsTitle>
            {/*{desc &&*/}
            {/*    <SkillDesc>*/}
            {/*        {desc}*/}
            {/*    </SkillDesc>}*/}
            </div>
        </SkillsItemBlock>
    );
};

export default SkillsItem;

interface SkillsItemBlockProps {
    isMain?: boolean
}

const SkillDesc = styled.p`
  color: var(--light-gray-color);
  text-align: center;
`
const SkillsItemBlock = styled.div<SkillsItemBlockProps>`
    flex: 1 1 20%;
  @media (max-width: 490px) {
    flex: 1 1 50%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px 10px;
  ${props => props.isMain && css`
    flex: 1 1 25%;
  `}
`
const SkillImg = styled.div<SkillsItemBlockProps>`
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  padding: 5%;
  background-color: var(--dark-gray-color);
  //border: 1px solid #D1D1D1;
  max-height: 110px;
  max-width: 150px;
  ${props => props.isMain && css`
    max-height: 150px;
    max-width: 190px;
  `}
  transition: scale 0.3s ease;

  &:hover {
    transition: scale 0.3s ease;
    scale: 1.1;

    .tb:after,
    .tb:before {
      width: 100%;
      transition: all 0.5s ease;
    }

    .lr:after,
    .lr:before {
      height: 100%;
      transition: all 0.5s ease;
    }

  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const SkillsTitle = styled.h4 `
  text-align: center;
  margin-top: 22px;
  text-transform: uppercase;
  color: #fff;
`

const border = css`
  content: "";
  position: absolute;
  background: #a8a8a8;
  //background: hsla(0, 0%, 100%, .5);
  transition: all 0.5s ease;
`


const BorderTopBottom = styled.span `
  &:before {

    width: 50px;
    height: 3px;
    top: -6px;
    left: -7px;
    ${border}
  }
  &:after {
    width: 50px;
    height: 3px;
    bottom: -6px;
    right: -7px;
    ${border}
  }
`
const BorderLeftRight = styled.span `
  &:before {

    top: -4px;
    left: -7px;
    width: 3px;
    height: 25px;
    ${border}

  }
  &:after {
    bottom: -4px;
    right: -7px;
    width: 3px;
    height: 25px;
    ${border}
  }
`
