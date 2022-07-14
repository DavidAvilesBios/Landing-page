import React from 'react';
import './NavBar.css';

const NavBar = (props) => {

  const {
    onHomeClick = () => {},
    onProjectsClick = () => {},
    onAboutClick = () => {},
    onFinancingClick = () => {},
  } = props;

  return (
    <div className='navigationBar'>
      <div className='navigationItem' onClick={onHomeClick}>
          <span>HOME</span>
      </div>
      <div className='navigationItem' onClick={onProjectsClick}>
          <span>PROJECTS</span>
      </div>
      <div className='navigationItem' onClick={onAboutClick}>
          <span>ABOUT US</span>
      </div>
      <div className='navigationItem' onClick={onFinancingClick}>
          <span>FINANCING</span>
      </div>
    </div>
  );
};

export default NavBar;