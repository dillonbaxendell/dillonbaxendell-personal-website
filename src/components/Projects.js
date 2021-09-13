import React from 'react'
import Project from './Project'
import { ProjectsSection, ProjectsWrapper, } from './styles/ProjectsStyles'

import coding from '../images/coding.jpg'

import dillonbaxendell from "../images/dillonprofilepic.jpeg"
import me from "../images/me.JPG"
import path from "../images/path.jpg"
import pixels from "../images/pixels.jpeg"
import ghostlight from "../images/ghostlight.jpeg"

const projects = [
  {
    title: 'Your Path',
    description: 'lorem ipsum...',
    background:{ image: path, centering: 'center',},
    link: 'https://yaps.life/',
  },
  {
    title: 'Github / Code',
    description: 'See the source code behind my projects',
    background:{ image: coding, centering: 'center',},
    link: 'https://github.com/kristianeboe',
  },
  {
    title: 'dillonbaxendell.me',
    description:
      'Come explore my portfolio and see my own little piece of the web.',
    background:{ image: me, centering: 'center',},
    link: 'https://kristianeboe.me/',
  },
  {
    title: 'LinkedIn',
    description: 'Professional profile',
    background:{ image: dillonbaxendell, centering: 'top',},
    link: 'https://www.linkedin.com/in/dillonbaxendell/',
  },
  {
    title: 'Pixels',
    description: 'a self-developed mood tracker app',
    background:{ image: pixels, centering: 'center',},
    link: 'https://blunk-dev.firebaseapp.com',
  },
  {
    title: 'Theatre Projects',
    description:
      'Take a dive into ',
    background:{ image: ghostlight, centering: 'center',},
    link: 'https://boostamins.firebaseapp.com',
  },
]

const Projects = () => (
  <ProjectsSection>
    <ProjectsWrapper>
      {projects.map(project => (
        <Project key={project.title} project={project} />
      ))}
    </ProjectsWrapper>
  </ProjectsSection>
)

export default Projects
