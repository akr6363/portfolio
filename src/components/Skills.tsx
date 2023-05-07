import React from 'react';
import styled from "styled-components";
import SkillsItem from "./SkillsItem";
import IconReact from '../img/react.png'
import IconJs from '../img/js.png'
import IconRedux from '../img/redux.png'
import IconTs from '../img/ts.png'
import IconMui from '../img/MUI.png'
import IconRestApi from '../img/restAPI.png'
import IconHtml from '../img/html.png'
import IconGit from '../img/git.png'
import IconJest from '../img/tdd-jest.png'
import IconAxios from '../img/axios.png'
import IconStorybook from '../img/storybook.png'
import IconCss from '../img/css.png'
import IconFigma from '../img/figma.png'
import IconStyled from '../img/styled.png'
import {Container, Section, SectionTitle} from "../assets/styles/stylesComponents";

const descReact = 'Used React library for developing UI of SPA. Experienced in creating functional components with Hooks as well as class components. Used HOC to reuse component logic and optimize performance with React.memo.'
const descRedux = 'Implemented Redux for state management of app as BLL. Created reducers for immutable state modification, and used Thunk middleware for asynchronous network requests.'
const descJs = 'Experienced in using ES6 features, such as Promises, Classes, Destructuring assignment, Arrow functions etc.'
const descTs = 'Used TypeScript for developing easily scalable and sustainable application.'
const mainSkillsItems = [
    {icon: IconReact, title: 'React', desc:descReact},
    {icon: IconJs, title: 'JavaScript', desc: descRedux},
    {icon: IconRedux, title: 'Redux', desc: descJs},
    {icon: IconTs, title: 'TypeScript', desc: descTs},

]
const secondSkillsItems = [
    {icon: IconMui, title: 'MaterialUI'},
    {icon: IconRestApi, title: 'Rest API'},
    {icon: IconHtml, title: 'HTML5'},
    {icon: IconGit, title: 'GIT'},
    {icon: IconJest, title: 'Jest-TDD'},
    {icon: IconAxios, title: 'Axios'},
    {icon: IconStorybook, title: 'Storybook'},
    {icon: IconCss, title: 'CSS'},
    {icon: IconFigma, title: 'Figma'},
    {icon: IconStyled, title: 'Styled components'},
]

const Skills = () => {
    return (
        <Section $gray>
            <Container>
                <SectionTitle>
                    MY SKILLS
                </SectionTitle>
                <MainSkills>
                    {mainSkillsItems.map((skill, ind) => {
                        return (
                            <SkillsItem key={ind} icon={skill.icon} title={skill.title} isMain={true}
                                        desc={skill.desc}/>
                        )
                    })}
                </MainSkills>
                <SecondSkills>
                    {secondSkillsItems.map((skill, ind) => {
                        return (
                            <SkillsItem key={ind} icon={skill.icon} title={skill.title}/>
                        )
                    })}
                </SecondSkills>
            </Container>
        </Section>
    );
};

export default Skills;

const MainSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SecondSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
`