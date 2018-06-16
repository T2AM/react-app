import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../projectsAPI.json';

const Projects = ({ match }) => {
  const renderProjectCard = project => {
    return (
      <div key={project.id} className='cell medium-4 text-center item-margin-bottom border-radius thin-grey-border pad'>
        <Link
          to={ `/project?projectID=${project.id}` }
          className='pad round grey-bg project-logo-container flex-container flex-dir-column align-center align-middle'
        >
          <img
            className='project-logo'
            src={ project.imgSrc }
            alt={ project.imgAlt } />
        </Link>
        <div>
          <h4>{ project.name }</h4>
          <p>{ project.slug }</p>
        </div>
      </div>
    )
  }

  const renderProjectRow = projects => {
    return (
      <div className='grid-x grid-margin-x'>
        { projects.map(project => renderProjectCard(project)) }
      </div>
    )
  }

  return (
    <main className='main-container projects-page'>
      <div className='grid-container projects-container'>
        <h1 className='headline'>What&apos;s blocking you?</h1>
        { renderProjectRow(projectsData.slice(0, 3))}
        { renderProjectRow(projectsData.slice(3, 6))}
      </div>
    </main>
  )
}

export default Projects;
