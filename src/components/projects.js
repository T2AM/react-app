import React from 'react';

const Projects = ({ match }) => {
  const projectData = [
    {
      name: 'Laravel',
      slug: 'Yeah, The Internet still uses PHP',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Laravel.png',
      imgAlt: 'Laravel logo too short'
    },
    {
      name: 'Babel',
      slug: 'You know you need it',
      imgSrc: 'https://raw.githubusercontent.com/babel/logo/master/babel.png',
      imgAlt: 'Babel logo'
    },
    {
      name: 'Gulp',
      slug: 'Everyone\'s doing it',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Gulp-white-text.svg',
      imgAlt: 'Gulp logo light'
    },
    {
      name: 'Nodejs',
      slug: 'It\'s everything',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      imgAlt: 'Node logo'
    },
    {
      name: 'Expressjs',
      slug: 'Express yourself',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
      imgAlt: 'Express logo'
    },
    {
      name: 'Sass',
      slug: 'Something about syntatic and compilation',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
      imgAlt: 'Syntatically Awesome Stylesheets logo'
    }
  ]

  const renderProjectCard = project => {
    return (
      <div className='cell medium-4 text-center item-margin-bottom border-radius thin-grey-border pad'>
        <div className='pad round grey-bg project-logo-container flex-container flex-dir-column align-center'>
          <a href={ `/project?project=${project.name}` }>
            <img
              className='project-logo'
              src={ project.imgSrc }
              alt={ project.imgAlt } />
          </a>
        </div>
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
        <h1 className='headline'>What's blocking you?</h1>
        { renderProjectRow(projectData.slice(0, 3))}
        { renderProjectRow(projectData.slice(3, 6))}
      </div>
    </main>
  )
}

export default Projects;
