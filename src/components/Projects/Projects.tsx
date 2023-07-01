import React from 'react';
import {Container, Section, SectionTitle} from "../../assets/styles/stylesComponents";
import styled from "styled-components";
import ImgSocialNetwork from '../../assets/images/projects/social-network3.jpg'
import ImgTodoList from '../../assets/images/projects/todo.jpg'
import ImgCRM from '../../assets/images/projects/crm2.jpg'
import ImgProject from '../../assets/images/projects/project2.jpg'
import ImgBlanchard from '../../assets/images/projects/Blanchard.jpg'
import ProjectItem from "./ProjectItem";
const Fade = require("react-reveal/Fade")
const descriptionForSocialNetwork = 'Social Network SPA created with React JS library, Redux for state management, TypeScript for scalability.'
const descriptionForTodo = 'Application build with ReactJS/Redux/TypeScript and Material UI library. Using React-hooks, Axios and Rest API'
const descriptionForCRM = 'customer contact data management system written in vanilla js'
const descriptionForBlanchard = 'adaptive, pixel-perfect layout for an art gallery website. HTML, CSS, JS'
const descriptionForProject = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const projects = [
    {title: 'Social Network', description: descriptionForSocialNetwork, img: ImgSocialNetwork},
    {title: 'To-do List', description: descriptionForTodo, img: ImgTodoList},
    {title: 'CRM system', description: descriptionForCRM, img: ImgCRM},
    {title: 'Blanchard', description: descriptionForBlanchard, img: ImgBlanchard},
    {title: 'Project', description: descriptionForProject, img: ImgProject},
    {title: 'Project', description: descriptionForProject, img: ImgProject},
]


const Projects = () => {
    return (
        <Section id={'projects'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <Fade left cascade>
                <ProjectsRow>
                    {projects.map((pr, ind) => {
                        return (
                            <ProjectItem title={pr.title} description={pr.description} img={pr.img}/>
                        )
                    })}
                </ProjectsRow>
                </Fade>
            </Container>
            
        </Section>
    );
};

export default Projects;

const ProjectsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

`