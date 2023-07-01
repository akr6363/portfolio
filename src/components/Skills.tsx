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
import IconSass from '../img/Sass.png'
import IconPostman from '../img/postman.png'
import {Container, Section, SectionTitle} from "../assets/styles/stylesComponents";
const Fade = require("react-reveal/Fade")
// import {Container, Section, SectionTitle} from "../assets/styles/stylesComponents";

const descReact = 'Used React library for developing UI of SPA. Experienced in creating functional components with Hooks as well as class components. Used HOC to reuse component logic and optimize performance with React.memo.'
const descRedux = 'Implemented Redux for state management of app as BLL. Created reducers for immutable state modification, and used Thunk middleware for asynchronous network requests.'
const descJs = 'Experienced in using ES6 features, such as Promises, Classes, Destructuring assignment, Arrow functions etc.'
const descTs = 'Used TypeScript for developing easily scalable and sustainable application.'
const mainSkillsItems = [
    {icon: IconReact, title: 'React', desc:descReact},
    {icon: IconRedux, title: 'Redux', desc: descJs},
    {icon: IconJs, title: 'JavaScript', desc: descRedux},
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
    {icon: IconSass, title: 'Sass'},
    {icon: IconStyled, title: 'Styled components'},
    {icon: IconPostman, title: 'Postman'},
]

const Skills = () => {
    return (
        <Section $gray id={'skills'}>
            <Container>
                <SectionTitle>
                    MY SKILLS
                </SectionTitle>
                <Fade left cascade>
                <MainSkills>
                    {mainSkillsItems.map((skill, ind) => {
                        return (
                            <SkillsItem key={ind} icon={skill.icon} title={skill.title} isMain={true}
                                        desc={skill.desc}/>
                        )
                    })}
                </MainSkills>
                    </Fade>
                <Fade left cascade>
                <SecondSkills>
                    {secondSkillsItems.map((skill, ind) => {
                        return (

                            <SkillsItem key={ind} icon={skill.icon} title={skill.title}/>
                        )
                    })}
                </SecondSkills>
                </Fade>
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