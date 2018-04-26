import React from 'react';

const Projects = props => {
  return (
    <main className='main-container projects-page'>
      <h1 className='headline'>What's blocking you?</h1>
      <div className='projects-container'>
        <div className='grid-x'>
          <div className='cell'>
            <a>
              <img
                className='project-logo'
                src='https://raw.githubusercontent.com/babel/logo/master/babel.png'
                alt='Babel logo' />
            </a>
          </div>
          <div className='cell'>
            <a>
              <img
                className='project-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Gulp-white-text.svg'
                alt='Gulp logo' />
            </a>
          </div>
          <div className='cell'>
            <a>
              <img
                className='project-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
                alt='Nodejs logo' />
            </a>
          </div>
        </div>
        <div className='grid-x'>
          <div className='cell'>
            <a>
              <img
                className='project-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
                alt='expressjs logo' />
            </a>
          </div>
          <div className='cell'>
            <a>
              <img
                className='project-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg'
                alt='Sass Syntatically Aweseome Style Sheets logo' />
            </a>
          </div>
          <div className='cell'>
            <a>
              <img
                className='project-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/8/85/Laravel.png'
                alt='Laravel logo' />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Projects;
