import ImgSocialNetwork from "../../assets/images/projects/social-network3.jpg";
import ImgTodoList from "../../assets/images/projects/todo.jpg";
import ImgCRM from "../../assets/images/projects/crm2.jpg";
import ImgBlanchard from "../../assets/images/projects/Blanchard.jpg";
import ImgProject from "../../assets/images/projects/project2.jpg";

const descriptionForSocialNetwork = 'Social Network SPA created with React JS library, Redux for state management, TypeScript for scalability.'
const descriptionForTodo = 'Application build with ReactJS/Redux/TypeScript and Material UI library. Using React-hooks, Axios and Rest API'
const descriptionForCRM = 'customer contact data management system written in vanilla js'
const descriptionForBlanchard = 'adaptive, pixel-perfect layout for an art gallery website. HTML, CSS, JS, BEM'
const descriptionForProject = 'a place for future projects'

export const projects = [
    {
        title: 'Social Network',
        description: descriptionForSocialNetwork,
        img: ImgSocialNetwork,
        viewLink: 'https://akr6363.github.io/samurai-way-main',
        sourcesLink: 'https://github.com/akr6363/samurai-way-main'
    },
    {
        title: 'To-do List',
        description: descriptionForTodo,
        img: ImgTodoList,
        viewLink: 'https://akr6363.github.io/todolist',
        sourcesLink: 'https://github.com/akr6363/todolist'
    },
    {title: 'CRM system', description: descriptionForCRM, img: ImgCRM, viewLink: '', sourcesLink: ''},
    {
        title: 'Blanchard',
        description: descriptionForBlanchard,
        img: ImgBlanchard,
        viewLink: 'https://akr6363.github.io/blanchard/',
        sourcesLink: 'https://github.com/akr6363/blanchard'
    },
    {title: 'Project', description: descriptionForProject, img: ImgProject, viewLink: '#', sourcesLink: '#'},
    {title: 'Project', description: descriptionForProject, img: ImgProject, viewLink: '#', sourcesLink: '#'},
]